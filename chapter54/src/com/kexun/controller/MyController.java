package com.kexun.controller;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import org.springframework.web.servlet.ModelAndView;
@Controller
@RequestMapping("/kx")
public class MyController {//���@Controllerע�������ΪController����,���Դ���ǰ��������Ӧ����
	@RequestMapping("/hqy")
	public ModelAndView play(HttpServletRequest req,HttpServletResponse resp) {
		ModelAndView mv=new ModelAndView();
		mv.addObject("msg","ע����������");
		mv.setViewName("/WEB-INF/beifeng.jsp");
		return mv;
	}
	@RequestMapping("/disp")
	public String go() {
		//����ʹ��ԭ�����������������
		//�����������,�˴������ο�
		HttpServletRequest req=((ServletRequestAttributes) (RequestContextHolder.currentRequestAttributes())).getRequest();
		//(1)ͨ��req����HttpSession����
		HttpSession hs=req.getSession();
		hs.setAttribute("session", "����session");
		//(2)ͨ��req����Application����,�˴���Ӧ����ServletContext����
		ServletContext sc=req.getServletContext();
		sc.setAttribute("app", "myapp");
		req.setAttribute("hqy", "�Ҿ�����");
		//��springmvcĬ�������ʹ���ض����ǲ���������
		//������ʹ��flash����ʵ���ض���ֵ
		return "/index.jsp";
	}
	int sum;
	//�˴�û�з���ֵ,������һЩҵ���߼�,����Ҫ��ת
	@RequestMapping("/daniu")
	public void dn() {
		int a=10;
		int b=90;
		sum=a+b;
	}
}
