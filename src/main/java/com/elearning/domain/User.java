package com.elearning.domain;

import java.io.Serializable;
import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.*;

import com.elearning.constant.UserType;
import com.elearning.domain.security.Authority;
import com.elearning.domain.security.UserRole;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class User implements UserDetails, Serializable{

	private static final long serialVersionUID = 902783495L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="Id", nullable=false, updatable = false)
	private Long id;
	
	private String username;
	private String password;
	
	private String email;
	private boolean enabled = true;
	
	@OneToMany(mappedBy = "user", cascade=CascadeType.ALL, fetch = FetchType.EAGER)
	@JsonIgnore
	private Set<UserRole> userRoles = new HashSet<>();

	@OneToOne(targetEntity = Student.class)
	@JsonIgnore
	private Student student;

	@OneToOne(targetEntity = Lecturer.class)
	@JsonIgnore
	private Lecturer lecturer;

	@Enumerated(EnumType.STRING)
	@Column(name = "user_type")
	private UserType userType;


	public Student getStudent() {
		return student;
	}

	public void setStudent(Student student) {
		this.student = student;
	}

	public Lecturer getLecturer() {
		return lecturer;
	}

	public void setLecturer(Lecturer lecturer) {
		this.lecturer = lecturer;
	}

	/*@OneToMany(cascade=CascadeType.ALL, mappedBy = "user")
	private List<UserPayment> userPaymentList;
	
	@OneToMany(cascade=CascadeType.ALL, mappedBy = "user")
	private List<UserShipping> userShippingList;
	
	
	@OneToOne(cascade=CascadeType.ALL, mappedBy = "user")
	private ShoppingCart shoppingCart;

	@OneToMany(mappedBy="user")
	private List<Order> orderList;*/

	public UserType getUserType() {
		return userType;
	}

	public void setUserType(UserType userType) {
		this.userType = userType;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	

	public void setEnabled(boolean enabled) {
		this.enabled = enabled;
	}

	public Set<UserRole> getUserRoles() {
		return userRoles;
	}

	public void setUserRoles(Set<UserRole> userRoles) {
		this.userRoles = userRoles;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		
		Set<GrantedAuthority> authorities = new HashSet<>();
		userRoles.forEach(ur -> authorities.add(new Authority(ur.getRole().getName())));
		
		return authorities;
	}

	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}
	
	@Override
	public boolean isEnabled() {
		return enabled;
	}


	
	
	
	
}
