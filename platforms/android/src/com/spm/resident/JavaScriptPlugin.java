package com.spm.resident;

import android.app.Activity;
import android.app.AlertDialog;
import android.app.DatePickerDialog;
import android.app.TimePickerDialog;
import android.content.DialogInterface;
import android.widget.DatePicker;
import android.widget.TimePicker;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaArgs;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.json.JSONArray;
import org.json.JSONException;

import java.util.Calendar;
import java.util.Date;

/**
 * Created by gallavie on 06/03/2017.
 */

public class JavaScriptPlugin extends CordovaPlugin{
    private String dataString;
    private Activity activity;


    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        callbackContext.success(dataString);
        return true;
    }

    @Override
    public boolean execute(String action, CordovaArgs args, CallbackContext callbackContext) throws JSONException {
        callbackContext.success(dataString);
        return true;
    }

    @Override
    public boolean execute(String action, String rawArgs, CallbackContext callbackContext) throws JSONException {
        callbackContext.success(dataString);
        return true;
    }
    @Override
    public void initialize(CordovaInterface cordova, CordovaWebView webView)
    {
        super.initialize(cordova, webView);
        // Set the Activity.
        this.activity = cordova.getActivity();
        dataString = activity.getIntent().getDataString();


    }

}