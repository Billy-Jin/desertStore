package kr.co.dessertStore.model;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.hibernate.annotations.CollectionId;
import org.hibernate.annotations.CreationTimestamp;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor //기본 생성자
@AllArgsConstructor //전체 생성자
@Builder
@Entity //테이블 생성
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)  // 프로젝트에서 연결된 DB의 넘버링 전략을 따라감 우리는 maria라서 auto_increment
	private int no;
	
	@Column(length = 300, nullable = false, unique = true)
	private String id;
	
	@Column(length = 500, nullable = false)
	private String password;
	
	@Column(nullable = false, unique = true)
	private String email;
	
	@Column(nullable = true)
	private String phoneNumber;
	
	@Column(nullable = true)
	private String address;
	
	@Column(nullable = true)
	private String addressDetail;
	
	@Column(nullable = true)
	private String socialType;
	
	@CreationTimestamp //시간이 자동 입력
	private Timestamp createDate;

}
