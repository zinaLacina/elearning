package com.elearning;

import com.elearning.config.SecurityUtility;
import com.elearning.domain.Classroom;
import com.elearning.domain.Course;
import com.elearning.domain.Level;
import com.elearning.domain.User;
import com.elearning.domain.security.Role;
import com.elearning.domain.security.UserRole;
import com.elearning.service.ClassroomService;
import com.elearning.service.CourseService;
import com.elearning.service.LevelService;
import com.elearning.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.support.SpringBootServletInitializer;
import org.springframework.context.annotation.ComponentScan;

import java.util.HashSet;
import java.util.Set;

//@ComponentScan(basePackages = "com.elearning.resource")
@SpringBootApplication
public class ElearningApplication extends SpringBootServletInitializer implements CommandLineRunner {

	@Autowired
	private UserService userService;

	@Autowired
	private ClassroomService classroomService;

	@Autowired
	private CourseService courseService;

	@Autowired
	private LevelService levelService;

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(ElearningApplication.class);
	}

	public static void main(String[] args) throws Exception {
		SpringApplication.run(ElearningApplication.class, args);
	}


	@Override
	public void run(String... args) throws Exception {

		User user1 = new User();
		user1.setUsername("zina");
		user1.setPassword(SecurityUtility.passwordEncoder().encode("zina"));
		user1.setEmail("zinalacina@gmail.com");
		Set<UserRole> userRoles = new HashSet<>();
		Role role1 = new Role();
		role1.setRoleId(1);
		role1.setName("ROLE_USER");
		userRoles.add(new UserRole(user1, role1));

		userService.createUser(user1, userRoles);

		userRoles.clear();

		User user2 = new User();
		user2.setUsername("admin");
		user2.setPassword(SecurityUtility.passwordEncoder().encode("admin"));
		user2.setEmail("Admin@gmail.com");
		Role role2 = new Role();
		role2.setRoleId(0);
		role2.setName("ROLE_ADMIN");
		userRoles.add(new UserRole(user2, role2));

		userService.createUser(user2, userRoles);

		userRoles.clear();

		User user3 = new User();
		user3.setUsername("wannous");
		user3.setPassword(SecurityUtility.passwordEncoder().encode("wannous"));
		user3.setEmail("wannous@gmail.com");
		Role role3 = new Role();
		role3.setRoleId(2);
		role3.setName("ROLE_PROFESSOR");
		userRoles.add(new UserRole(user3, role3));

		userService.createUser(user3, userRoles);


		/*
		*    Adding Education level
		*/
		/*Level level = new Level();
		level.setName("Master 1");
		levelService.save(level);

		Level level2 =  new Level();
		level2.setName("Master 2");
		levelService.save(level2);*/


		/*
		*  adding different classroom
		* */
		//1
		/*Classroom classroom = new Classroom();
		classroom.setClassroomName("Classroom A");
		classroom.setFloorNumber(3);
		//classroom.setActive(true);
		classroomService.save(classroom);

		//2
		Classroom classroom1 = new Classroom();
		classroom1.setClassroomName("Classroom B");
		classroom1.setFloorNumber(3);
		//classroom1.setActive(true);
		classroomService.save(classroom1);

		//3
		Classroom classroom2 = new Classroom();
		classroom2.setClassroomName("Classroom C");
		classroom2.setFloorNumber(3);
		classroom2.setActive(true);
		classroomService.save(classroom2);

		//3
		Classroom classroom3 = new Classroom();
		classroom3.setClassroomName("Classroom D");
		classroom3.setFloorNumber(8);
		classroom3.setActive(true);
		classroomService.save(classroom3);

		//Add course
		//1
		//Classroom a = classroomService.findeOne(new Long(1));
		//Classroom c = classroomService.findeOne(new Long(3));
		//Classroom d = classroomService.findeOne(new Long(4));
		Course course = new Course();
		//course.setId(new Long(1));
		course.setActive(true);
		course.setClassroom(classroom1);
		course.setCourseCode("DBA2017");
		course.setCredit(2);
		course.setTitle("Database course training");
		courseService.save(course);

		//1
		//Classroom b = classroomService.findeOne(new Long(2));
		//Classroom c = classroomService.findeOne(new Long(3));
		//Classroom d = classroomService.findeOne(new Long(4));

		Course course1 = new Course();
		//course1.setId(new Long(2));
		course1.setActive(true);
		course1.setClassroom(classroom2);
		course1.setCourseCode("PROG2017");
		course1.setCredit(2);
		course1.setTitle("Programming exercice 2017");
		courseService.save(course1);*/


	}
}
