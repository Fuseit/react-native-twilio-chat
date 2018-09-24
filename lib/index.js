import { Platform } from 'react-native'
const isAndroid = Platform.OS === 'android'

exports.AccessManager = require('./AccessManager').default;
exports.Client = isAndroid ? require('./Client').default : require('../lib_ios/Client').default;
exports.Channel = isAndroid ? require('./Channel').default : require('../lib_ios/Channel').default;
isAndroid ? exports.ChannelDescriptor = require("./ChannelDescriptor").default : null;
exports.User = isAndroid ? require('./User').default : require('../lib_ios/UserInfo').default;
isAndroid ? exports.UserDescriptor = require('./UserDescriptor').default : null;
exports.Member = isAndroid ? require('./Member').default : require('../lib_ios/Member').default;
exports.Message = require('./Message').default;
exports.Constants = require('./Constants').default;
exports.Paginator = isAndroid ? require('./Paginator').default : require('../lib_ios/Paginator').default;
