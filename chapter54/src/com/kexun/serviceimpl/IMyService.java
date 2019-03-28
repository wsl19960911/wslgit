package com.kexun.serviceimpl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import com.kexun.daoimpl.IDao;
import com.kexun.entity.Student;
import com.kexun.service.MyService;
@Service
public class IMyService implements MyService {
	@Resource
	IDao iDao; 
	// 将集合中的对象按face大小排序
	@Override
	public List<Student> queryAll() {
		// TODO Auto-generated method stub
		List<Student> list= iDao.selectAll();
		for (int i = 0; i < list.size()-1; i++) {
			for(int j=0;j<list.size()-1-i;j++) {
			Student temp = list.get(j);
			if (list.get(j).getFace() > list.get(j + 1).getFace()) {
                 list.set(j, list.get(j+1));
                 list.set(j+1, temp);
			}
			}
		}
		return list;
	}

}
