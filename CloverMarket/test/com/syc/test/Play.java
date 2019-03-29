package com.syc.test;

import com.syc.tools.DBUtils;

public class Play {
	public static void main(String[] args) {
		play();
	}
	public static void play() {
		DBUtils.getSession();
	}
}
