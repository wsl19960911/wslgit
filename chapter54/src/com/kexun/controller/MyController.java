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
public class MyController {//添加@Controller注解后此类就为Controller类了,可以处理前端请求并响应数据
	@RequestMapping("/hqy")
	public ModelAndView play(HttpServletRequest req,HttpServletResponse resp) {
		ModelAndView mv=new ModelAndView();
		mv.addObject("msg","注解让我来的");
		mv.setViewName("/WEB-INF/beifeng.jsp");
		return mv;
	}
	@RequestMapping("/disp")
	public String go() {
		//可以使用原生的请求域对象传数据
		//生成请求对象,此处仅供参考
		HttpServletRequest req=((ServletRequestAttributes) (RequestContextHolder.currentRequestAttributes())).getRequest();
		//(1)通过req生成HttpSession对象
		HttpSession hs=req.getSession();
		hs.setAttribute("session", "我是session");
		//(2)通过req生成Application对象,此处对应的是ServletContext对象
		ServletContext sc=req.getServletContext();
		sc.setAttribute("app", "myapp");
		req.setAttribute("hqy", "我就是我");
		//在springmvc默认情况下使用重定向是不允许传数据
		//但可以使用flash技术实现重定向传值
		return "/index.jsp";
	}
	int sum;
	//此处没有返回值,仅处理一些业务逻辑,不需要跳转
	@RequestMapping("/daniu")
	public void dn() {
		int a=10;
		int b=90;
		sum=a+b;
	}
}
