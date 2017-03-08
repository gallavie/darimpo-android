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
    
    - (void)getDeepLink:(CDVInvokedUrlCommand*)command
    {

        AppDelegate *appDelegate = (AppDelegate *)[[UIApplication sharedApplication] delegate];

        NSString* urlScheme = appDelegate.urlScheme;
//        
//        UIAlertView *alert = [[UIAlertView alloc] initWithTitle:@"Test Message"
//                                                        message:urlScheme
//                                                       delegate:nil
//                                              cancelButtonTitle:@"OK"
//                                              otherButtonTitles:nil];
//        [alert show];

        CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:urlScheme];
        [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];

    }
    
@end
