package com.project2;

import org.springframework.security.web.context.AbstractSecurityWebApplicationInitializer;

public class DelegatingFilterProxyInitializer extends AbstractSecurityWebApplicationInitializer {
	// bootstrap the DelegatingFilterProxy
	// adds the url-pattern to be /* (will intercept all requests for me)
}