(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f();}else if(typeof define==="function"&&define.amd){define([],f);}else{var g;if(typeof window!=="undefined"){g=window;}else if(typeof global!=="undefined"){g=global;}else if(typeof self!=="undefined"){g=self;}else{g=this;}if(typeof g.sensor_msgs==="undefined"){g.sensor_msgs={};}g.sensor_msgs.MultiEchoLaserScan=f();}})(function(){var define,module,exports;'use strict';
const _CURRENT_PATH_ = document.currentScript.src.substring(0, document.currentScript.src.lastIndexOf("/"));
const _ROOT_PATH_ = _CURRENT_PATH_.substring(0, _CURRENT_PATH_.lastIndexOf("/"));
document.write("<script language=javascript src='"+_ROOT_PATH_+"/std_msgs/Header.js'></script>");
document.write("<script language=javascript src='"+_ROOT_PATH_+"/sensor_msgs/LaserEcho.js'></script>");

function MultiEchoLaserScan() {
    this.header = std_msgs.Header();
    this.angle_min = 0.0;
    this.angle_max = 0.0;
    this.angle_increment = 0.0;
    this.time_increment = 0.0;
    this.scan_time = 0.0;
    this.range_min = 0.0;
    this.range_max = 0.0;
    this.ranges = new Array();
    this.intensities = new Array();
};

MultiEchoLaserScan.prototype.serialize = function(buff, idx) {
    var offset = idx;
    offset += this.header.serialize(buff, offset);
    var float32Array_angle_min = new Float32Array(1);
    var uInt8Float32Array_angle_min = new Uint8Array(float32Array_angle_min.buffer);
    float32Array_angle_min[0] = +this.angle_min;
    buff[offset + 0] = uInt8Float32Array_angle_min[0];
    buff[offset + 1] = uInt8Float32Array_angle_min[1];
    buff[offset + 2] = uInt8Float32Array_angle_min[2];
    buff[offset + 3] = uInt8Float32Array_angle_min[3];
    offset += 4;
    var float32Array_angle_max = new Float32Array(1);
    var uInt8Float32Array_angle_max = new Uint8Array(float32Array_angle_max.buffer);
    float32Array_angle_max[0] = +this.angle_max;
    buff[offset + 0] = uInt8Float32Array_angle_max[0];
    buff[offset + 1] = uInt8Float32Array_angle_max[1];
    buff[offset + 2] = uInt8Float32Array_angle_max[2];
    buff[offset + 3] = uInt8Float32Array_angle_max[3];
    offset += 4;
    var float32Array_angle_increment = new Float32Array(1);
    var uInt8Float32Array_angle_increment = new Uint8Array(float32Array_angle_increment.buffer);
    float32Array_angle_increment[0] = +this.angle_increment;
    buff[offset + 0] = uInt8Float32Array_angle_increment[0];
    buff[offset + 1] = uInt8Float32Array_angle_increment[1];
    buff[offset + 2] = uInt8Float32Array_angle_increment[2];
    buff[offset + 3] = uInt8Float32Array_angle_increment[3];
    offset += 4;
    var float32Array_time_increment = new Float32Array(1);
    var uInt8Float32Array_time_increment = new Uint8Array(float32Array_time_increment.buffer);
    float32Array_time_increment[0] = +this.time_increment;
    buff[offset + 0] = uInt8Float32Array_time_increment[0];
    buff[offset + 1] = uInt8Float32Array_time_increment[1];
    buff[offset + 2] = uInt8Float32Array_time_increment[2];
    buff[offset + 3] = uInt8Float32Array_time_increment[3];
    offset += 4;
    var float32Array_scan_time = new Float32Array(1);
    var uInt8Float32Array_scan_time = new Uint8Array(float32Array_scan_time.buffer);
    float32Array_scan_time[0] = +this.scan_time;
    buff[offset + 0] = uInt8Float32Array_scan_time[0];
    buff[offset + 1] = uInt8Float32Array_scan_time[1];
    buff[offset + 2] = uInt8Float32Array_scan_time[2];
    buff[offset + 3] = uInt8Float32Array_scan_time[3];
    offset += 4;
    var float32Array_range_min = new Float32Array(1);
    var uInt8Float32Array_range_min = new Uint8Array(float32Array_range_min.buffer);
    float32Array_range_min[0] = +this.range_min;
    buff[offset + 0] = uInt8Float32Array_range_min[0];
    buff[offset + 1] = uInt8Float32Array_range_min[1];
    buff[offset + 2] = uInt8Float32Array_range_min[2];
    buff[offset + 3] = uInt8Float32Array_range_min[3];
    offset += 4;
    var float32Array_range_max = new Float32Array(1);
    var uInt8Float32Array_range_max = new Uint8Array(float32Array_range_max.buffer);
    float32Array_range_max[0] = +this.range_max;
    buff[offset + 0] = uInt8Float32Array_range_max[0];
    buff[offset + 1] = uInt8Float32Array_range_max[1];
    buff[offset + 2] = uInt8Float32Array_range_max[2];
    buff[offset + 3] = uInt8Float32Array_range_max[3];
    offset += 4;
    var length_ranges = this.ranges.length;
    buff[offset + 0] = (length_ranges >> (8 * 0)) & 0xFF;
    buff[offset + 1] = (length_ranges >> (8 * 1)) & 0xFF;
    buff[offset + 2] = (length_ranges >> (8 * 2)) & 0xFF;
    buff[offset + 3] = (length_ranges >> (8 * 3)) & 0xFF;
    offset += 4;
    for (var i = 0; i < length_ranges; i++) {
        offset += this.ranges[i].serialize(buff, offset);
    }
    var length_intensities = this.intensities.length;
    buff[offset + 0] = (length_intensities >> (8 * 0)) & 0xFF;
    buff[offset + 1] = (length_intensities >> (8 * 1)) & 0xFF;
    buff[offset + 2] = (length_intensities >> (8 * 2)) & 0xFF;
    buff[offset + 3] = (length_intensities >> (8 * 3)) & 0xFF;
    offset += 4;
    for (var i = 0; i < length_intensities; i++) {
        offset += this.intensities[i].serialize(buff, offset);
    }
    return offset;
};

MultiEchoLaserScan.prototype.deserialize = function(buff, idx) {
    var offset = idx;
    offset += this.header.deserialize(buff, offset);
    var float32Array_angle_min = new Float32Array(1);
    var uInt8Float32Array_angle_min = new Uint8Array(float32Array_angle_min.buffer);
    uInt8Float32Array_angle_min[0] = buff[offset + 0];
    uInt8Float32Array_angle_min[1] = buff[offset + 1];
    uInt8Float32Array_angle_min[2] = buff[offset + 2];
    uInt8Float32Array_angle_min[3] = buff[offset + 3];
    this.angle_min = float32Array_angle_min[0];
    offset += 4;
    var float32Array_angle_max = new Float32Array(1);
    var uInt8Float32Array_angle_max = new Uint8Array(float32Array_angle_max.buffer);
    uInt8Float32Array_angle_max[0] = buff[offset + 0];
    uInt8Float32Array_angle_max[1] = buff[offset + 1];
    uInt8Float32Array_angle_max[2] = buff[offset + 2];
    uInt8Float32Array_angle_max[3] = buff[offset + 3];
    this.angle_max = float32Array_angle_max[0];
    offset += 4;
    var float32Array_angle_increment = new Float32Array(1);
    var uInt8Float32Array_angle_increment = new Uint8Array(float32Array_angle_increment.buffer);
    uInt8Float32Array_angle_increment[0] = buff[offset + 0];
    uInt8Float32Array_angle_increment[1] = buff[offset + 1];
    uInt8Float32Array_angle_increment[2] = buff[offset + 2];
    uInt8Float32Array_angle_increment[3] = buff[offset + 3];
    this.angle_increment = float32Array_angle_increment[0];
    offset += 4;
    var float32Array_time_increment = new Float32Array(1);
    var uInt8Float32Array_time_increment = new Uint8Array(float32Array_time_increment.buffer);
    uInt8Float32Array_time_increment[0] = buff[offset + 0];
    uInt8Float32Array_time_increment[1] = buff[offset + 1];
    uInt8Float32Array_time_increment[2] = buff[offset + 2];
    uInt8Float32Array_time_increment[3] = buff[offset + 3];
    this.time_increment = float32Array_time_increment[0];
    offset += 4;
    var float32Array_scan_time = new Float32Array(1);
    var uInt8Float32Array_scan_time = new Uint8Array(float32Array_scan_time.buffer);
    uInt8Float32Array_scan_time[0] = buff[offset + 0];
    uInt8Float32Array_scan_time[1] = buff[offset + 1];
    uInt8Float32Array_scan_time[2] = buff[offset + 2];
    uInt8Float32Array_scan_time[3] = buff[offset + 3];
    this.scan_time = float32Array_scan_time[0];
    offset += 4;
    var float32Array_range_min = new Float32Array(1);
    var uInt8Float32Array_range_min = new Uint8Array(float32Array_range_min.buffer);
    uInt8Float32Array_range_min[0] = buff[offset + 0];
    uInt8Float32Array_range_min[1] = buff[offset + 1];
    uInt8Float32Array_range_min[2] = buff[offset + 2];
    uInt8Float32Array_range_min[3] = buff[offset + 3];
    this.range_min = float32Array_range_min[0];
    offset += 4;
    var float32Array_range_max = new Float32Array(1);
    var uInt8Float32Array_range_max = new Uint8Array(float32Array_range_max.buffer);
    uInt8Float32Array_range_max[0] = buff[offset + 0];
    uInt8Float32Array_range_max[1] = buff[offset + 1];
    uInt8Float32Array_range_max[2] = buff[offset + 2];
    uInt8Float32Array_range_max[3] = buff[offset + 3];
    this.range_max = float32Array_range_max[0];
    offset += 4;
    var length_ranges = +((buff[offset + 0] & 0xFF) << (8 * 0));
    length_ranges |= +((buff[offset + 1] & 0xFF) << (8 * 1));
    length_ranges |= +((buff[offset + 2] & 0xFF) << (8 * 2));
    length_ranges |= +((buff[offset + 3] & 0xFF) << (8 * 3));
    offset += 4;
    this.ranges = new Array(length_ranges);
    for (var i = 0; i < length_ranges; i++) {
        this.ranges[i] = sensor_msgs.LaserEcho();
        offset += this.ranges[i].deserialize(buff, offset);
    }
    var length_intensities = +((buff[offset + 0] & 0xFF) << (8 * 0));
    length_intensities |= +((buff[offset + 1] & 0xFF) << (8 * 1));
    length_intensities |= +((buff[offset + 2] & 0xFF) << (8 * 2));
    length_intensities |= +((buff[offset + 3] & 0xFF) << (8 * 3));
    offset += 4;
    this.intensities = new Array(length_intensities);
    for (var i = 0; i < length_intensities; i++) {
        this.intensities[i] = sensor_msgs.LaserEcho();
        offset += this.intensities[i].deserialize(buff, offset);
    }
    return offset;
};

MultiEchoLaserScan.prototype.serializedLength = function() {
    var length = 0;
    length += this.header.serializedLength();
    length += 4
    length += 4
    length += 4
    length += 4
    length += 4
    length += 4
    length += 4
    var length_ranges = this.ranges.length;
    length += 4;
    for (var i = 0; i < length_ranges; i++) {
        length += this.ranges[i].serializedLength();
    }
    var length_intensities = this.intensities.length;
    length += 4;
    for (var i = 0; i < length_intensities; i++) {
        length += this.intensities[i].serializedLength();
    }
    return length;
};

MultiEchoLaserScan.prototype.echo = function() { return ""; };

MultiEchoLaserScan.prototype.getType = function() { return "sensor_msgs/MultiEchoLaserScan"; };

MultiEchoLaserScan.prototype.getMD5 = function() { return "92f3933b4fa486e3889b461437899bf5"; };

MultiEchoLaserScan.prototype.getID = function() { return 0; };

MultiEchoLaserScan.prototype.setID = function(id) { };

return function() { return new MultiEchoLaserScan(); };

});
