package kr.co.dessertStore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import kr.co.dessertStore.model.User;

public interface UserRepository extends JpaRepository<User,Integer>{

	//JPA 네이밍 전략으로 카멜케이스로 작성하면서 AND를 붙이면 뒤에 쿼리가 자동으로 작성된다.
	// SELECT * FROM USER WHERE id = 1? and password = 2? 와 같음.
	User findByIdAndPassword(String id, String password);

}
