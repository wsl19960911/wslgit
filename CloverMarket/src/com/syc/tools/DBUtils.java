package com.syc.tools;
/**
 * @author dell
 * @data 2019-3-26 15:45
 * @detail ʵ��mybatis���ݿ����Ӳ���
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
		//�����ַ��������,����sessionFactory��
		Reader rd=null;
		try {
			rd = Resources.getResourceAsReader("my.xml");
			sf=new SqlSessionFactoryBuilder().build(rd);
			//�������ݿ��������
			ss=sf.openSession();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		//System.out.println("���ɳɹ�!");
		return ss;
	}
	//�ر����ݿ��������
	public static void closeDB(SqlSession ss) {
		if(ss!=null) {
			ss.close();
		}
	}
}
