package com.kexun.daoimpl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.kexun.dao.Dao;
import com.kexun.entity.Student;
//默认按类名首字母小写注入,比如:此处有一个隐含的对象名
//为iDao;此处也可以指定一个属性名
//比如:@Repository("mydao")
@Repository
public class IDao implements Dao {
	@Override
	public List<Student> selectAll() {
		// TODO Auto-generated method stub
		Student st1 = new Student();
		Student st2 = new Student();
		Student st3 = new Student();
		ArrayList<Student> list = new ArrayList<>();
		st1.setName("tom");
		st1.setSid(101);
		st1.setFace(97);
		list.add(st1);
		st2.setName("bean");
		st2.setSid(102);
		st2.setFace(98);
		list.add(st2);
		st3.setName("mary");
		st3.setSid(103);
		st3.setFace(96);
		list.add(st3);
		return list;
	}

}
