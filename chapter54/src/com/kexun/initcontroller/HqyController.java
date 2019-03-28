package com.kexun.initcontroller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.Controller;

public class HqyController implements Controller {
////此方式实现不同的请求,o也!
	@Override
	public ModelAndView handleRequest(HttpServletRequest req, HttpServletResponse resp) throws Exception {
		// TODO Auto-generated method stub
		String jump=req.getParameter("jump");
		 ModelAndView mv=new ModelAndView();
		if(jump.equals("one")){
			mv=playOne();
		}else if(jump.equals("two")){
			mv=playOne();
		}else if(jump.equals("three")){
			mv=playOne();
		}
		return mv;
	}

	////////////// 不同的Controller选择///////////////
	public ModelAndView playOne() throws Exception {
		// TODO Auto-generated method stub
		ModelAndView mv = new ModelAndView();
		mv.addObject("one", "这是one");
		mv.setViewName("/WEB-INF/one.jsp");
		return mv;
	}

	public ModelAndView playTwo() throws Exception {
		// TODO Auto-generated method stub
		ModelAndView mv = new ModelAndView();
		mv.addObject("two", "这是two");
		mv.setViewName("/WEB-INF/two.jsp");
		return mv;
	}

	public ModelAndView playThree() throws Exception {
		// TODO Auto-generated method stub
		ModelAndView mv = new ModelAndView();
		mv.addObject("three", "这是threee");
		mv.setViewName("/WEB-INF/three.jsp");
		return mv;
	}
}
