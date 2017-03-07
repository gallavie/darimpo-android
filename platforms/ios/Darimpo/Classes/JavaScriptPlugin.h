//
//  JavaScriptPlugin.h
//  Darimpo
//
//  Created by Gal Lavie on 06/03/2017.
//
//

#import <Cordova/CDVPlugin.h>


@interface JavaScriptPlugin : CDVPlugin{}
    
- (void)getDeviceInfo:(CDVInvokedUrlCommand*)command;
    
@end
