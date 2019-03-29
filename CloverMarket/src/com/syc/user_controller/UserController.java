package com.syc.user_controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class UserController {
	@RequestMapping("/reg")
	public void reg(HttpServletRequest req) {
		String username=req.getParameter("username");
		String password=req.getParameter("password");
	}
}
