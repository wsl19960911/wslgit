package com.kexun.controller;

import java.util.List;
import javax.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;
import com.kexun.entity.Student;
import com.kexun.serviceimpl.IMyService;
@Controller
public class YourController {
	@Resource	
	IMyService iMyService;
	@RequestMapping("/qf")
	public ModelAndView queryAll() {
		List<Student> list =iMyService.queryAll();
		ModelAndView mv = new ModelAndView();
		mv.addObject("list", list);
		mv.setViewName("/WEB-INF/qf.jsp");
		return mv;
	}
}
