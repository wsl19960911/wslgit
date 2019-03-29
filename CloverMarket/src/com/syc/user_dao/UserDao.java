package com.syc.user_dao;

import com.syc.user_entity.User;

public interface UserDao {
	//插入用户
	public void ins(User user);
	//注册用户
	public void reg(Integer id,String username,String password);
}
