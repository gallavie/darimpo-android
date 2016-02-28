package com.spm.resident;

import android.content.Context;
import android.util.DisplayMetrics;
import android.webkit.JavascriptInterface;

final public class ConnectionToJs {

	private Context context;
	public static final String NAME = "interface";
	public ConnectionToJs(Context context){
		this.context = context;
	}
	@JavascriptInterface
	public float getXdpi(){
		DisplayMetrics displayMetrics = context.getResources().getDisplayMetrics();
		return displayMetrics.xdpi;
	}
}
