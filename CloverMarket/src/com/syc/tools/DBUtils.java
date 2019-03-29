package com.syc.tools;
/**
 * @author dell
 * @data 2019-3-26 15:45
 * @detail 实现mybatis数据库连接操作
 */

import java.io.IOException;
import java.io.Reader;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

public class DBUtils {
	public static SqlSession getSession() {
		
		SqlSessionFactory sf=null;
		SqlSession ss=null;
		//生成字符输入对象,传入sessionFactory中
		Reader rd=null;
		try {
			rd = Resources.getResourceAsReader("my.xml");
			sf=new SqlSessionFactoryBuilder().build(rd);
			//生成数据库操作对象
			ss=sf.openSession();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		//System.out.println("生成成功!");
		return ss;
	}
	//关闭数据库操作对象
	public static void closeDB(SqlSession ss) {
		if(ss!=null) {
			ss.close();
		}
	}
}
