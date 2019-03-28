<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>spring注解全解析</title>
</head>
<body>
	<table>
		<caption>springmvc全注解</caption>
		<c:forEach items="${list}" var="stu">
			<tr>
				<td><c:out value="${stu.sid}" /></td>
				<td><c:out value="${stu.name}" /></td>
				<td><c:out value="${stu.face}" /></td>
			</tr>
			</c:forEach>
	</table>
</body>
</html>