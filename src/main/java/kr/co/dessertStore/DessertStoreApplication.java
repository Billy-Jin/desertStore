package kr.co.dessertStore;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class DessertStoreApplication {

	public static void main(String[] args) {
		SpringApplication.run(DessertStoreApplication.class, args);
	}

}
