package com.syc.user_dao;

import com.syc.user_entity.User;

public interface UserDao {
	//�����û�
	public void ins(User user);
	//ע���û�
	public void reg(Integer id,String username,String password);
}
