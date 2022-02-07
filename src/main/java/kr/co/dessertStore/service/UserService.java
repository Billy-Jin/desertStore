package kr.co.dessertStore.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import kr.co.dessertStore.model.User;
import kr.co.dessertStore.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class UserService {
	
	@Autowired
	UserRepository userRepository;

	@Transactional
	public User userJoin(User entity) {
		log.info("userJoin Start ==================");
		User user  = new User();
		user = userRepository.save(entity);
		
		return user;
		
	}

	public User userLogin(String id, String password) {
		log.info("userLogin Start ==================");
		User user  = new User();
		user = userRepository.findByIdAndPassword(id,password);
		
		return user;
	}

}
