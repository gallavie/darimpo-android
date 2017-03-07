//
//  JavaScriptPlugin.m
//  Darimpo
//
//  Created by Gal Lavie on 06/03/2017.
//
//

#import "JavaScriptPlugin.h"
#import "AppDelegate.h"

@implementation JavaScriptPlugin
- (void)getDeviceInfo:(CDVInvokedUrlCommand*)command
    {
        
        
        UIAlertView *alert = [[UIAlertView alloc] initWithTitle:@"Test Message"
                                                        message:@"check"
                                                       delegate:nil
                                              cancelButtonTitle:@"OK"
                                              otherButtonTitles:nil];
        [alert show];
        
//        NSDictionary* deviceProperties = [self deviceProperties];
//        CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsDictionary:deviceProperties];
//        
//        [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
    }

@end
