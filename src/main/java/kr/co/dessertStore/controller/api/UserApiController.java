package kr.co.dessertStore.controller.api;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import kr.co.dessertStore.model.User;
import kr.co.dessertStore.service.UserService;
import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
public class UserApiController {
	
	@Autowired
	UserService userService;
	
	@PostMapping("/api/userJoin")
	@ResponseBody
	public ResponseEntity<?> userJoin(@RequestBody User entity){
		Map<String, Object> res = new HashMap<String, Object>();
		log.info("user :" + entity);
		User user = new User();
		
		try {
			user = userService.userJoin(entity);
			res.put("statusCode", "200");
			res.put("message", "회원 가입이 완료 되었습니다");
			res.put("data", user);
			return new ResponseEntity<Map<String,Object>>(res,HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			log.error(e.getMessage());
			res.put("error", e.getMessage());
		}
		res.put("message", "회원 가입에 실패하였습니다.");

		return new ResponseEntity<Map<String,Object>>(res,HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	@PostMapping("/api/userLogin")
	@ResponseBody
	public ResponseEntity<?> userLogin(@RequestBody User entity){
		Map<String, Object> res = new HashMap<String, Object>();
		log.info("user :" + entity);
		User user = new User();
		
		try {
			user = userService.userLogin(entity.getId(),entity.getPassword());
			if(user != null) {
				res.put("statusCode", "200");
				res.put("message", "로그인에 성공하였습니다.");
				res.put("data", user);
				return new ResponseEntity<Map<String,Object>>(res,HttpStatus.OK);
			}
		} catch (Exception e) {
			e.printStackTrace();
			log.error(e.getMessage());
			res.put("error", e.getMessage());
		}
		res.put("message", "비밀번호 또는 아이디를 확인해주세요");

		return new ResponseEntity<Map<String,Object>>(res,HttpStatus.INTERNAL_SERVER_ERROR);
	}
}









