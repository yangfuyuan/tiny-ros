#ifndef _TINYROS_sensor_msgs_PointCloud2_h
#define _TINYROS_sensor_msgs_PointCloud2_h

#include <stdint.h>
#include <string>
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include "tiny_ros/ros/msg.h"
#include "tiny_ros/std_msgs/Header.h"
#include "tiny_ros/sensor_msgs/PointField.h"

namespace sensor_msgs
{

  class PointCloud2 : public tinyros::Msg
  {
    public:
      typedef std_msgs::Header _header_type;
      _header_type header;
      typedef uint32_t _height_type;
      _height_type height;
      typedef uint32_t _width_type;
      _width_type width;
      uint32_t fields_length;
      typedef sensor_msgs::PointField _fields_type;
      _fields_type st_fields;
      _fields_type * fields;
      typedef bool _is_bigendian_type;
      _is_bigendian_type is_bigendian;
      typedef uint32_t _point_step_type;
      _point_step_type point_step;
      typedef uint32_t _row_step_type;
      _row_step_type row_step;
      uint32_t data_length;
      typedef uint8_t _data_type;
      _data_type st_data;
      _data_type * data;
      typedef bool _is_dense_type;
      _is_dense_type is_dense;

    PointCloud2():
      header(),
      height(0),
      width(0),
      fields_length(0), fields(NULL),
      is_bigendian(0),
      point_step(0),
      row_step(0),
      data_length(0), data(NULL),
      is_dense(0)
    {
    }

    virtual int serialize(unsigned char *outbuffer) const
    {
      int offset = 0;
      offset += this->header.serialize(outbuffer + offset);
      *(outbuffer + offset + 0) = (this->height >> (8 * 0)) & 0xFF;
      *(outbuffer + offset + 1) = (this->height >> (8 * 1)) & 0xFF;
      *(outbuffer + offset + 2) = (this->height >> (8 * 2)) & 0xFF;
      *(outbuffer + offset + 3) = (this->height >> (8 * 3)) & 0xFF;
      offset += sizeof(this->height);
      *(outbuffer + offset + 0) = (this->width >> (8 * 0)) & 0xFF;
      *(outbuffer + offset + 1) = (this->width >> (8 * 1)) & 0xFF;
      *(outbuffer + offset + 2) = (this->width >> (8 * 2)) & 0xFF;
      *(outbuffer + offset + 3) = (this->width >> (8 * 3)) & 0xFF;
      offset += sizeof(this->width);
      *(outbuffer + offset + 0) = (this->fields_length >> (8 * 0)) & 0xFF;
      *(outbuffer + offset + 1) = (this->fields_length >> (8 * 1)) & 0xFF;
      *(outbuffer + offset + 2) = (this->fields_length >> (8 * 2)) & 0xFF;
      *(outbuffer + offset + 3) = (this->fields_length >> (8 * 3)) & 0xFF;
      offset += sizeof(this->fields_length);
      for( uint32_t i = 0; i < fields_length; i++) {
        offset += this->fields[i].serialize(outbuffer + offset);
      }
      union {
        bool real;
        uint8_t base;
      } u_is_bigendian;
      u_is_bigendian.real = this->is_bigendian;
      *(outbuffer + offset + 0) = (u_is_bigendian.base >> (8 * 0)) & 0xFF;
      offset += sizeof(this->is_bigendian);
      *(outbuffer + offset + 0) = (this->point_step >> (8 * 0)) & 0xFF;
      *(outbuffer + offset + 1) = (this->point_step >> (8 * 1)) & 0xFF;
      *(outbuffer + offset + 2) = (this->point_step >> (8 * 2)) & 0xFF;
      *(outbuffer + offset + 3) = (this->point_step >> (8 * 3)) & 0xFF;
      offset += sizeof(this->point_step);
      *(outbuffer + offset + 0) = (this->row_step >> (8 * 0)) & 0xFF;
      *(outbuffer + offset + 1) = (this->row_step >> (8 * 1)) & 0xFF;
      *(outbuffer + offset + 2) = (this->row_step >> (8 * 2)) & 0xFF;
      *(outbuffer + offset + 3) = (this->row_step >> (8 * 3)) & 0xFF;
      offset += sizeof(this->row_step);
      *(outbuffer + offset + 0) = (this->data_length >> (8 * 0)) & 0xFF;
      *(outbuffer + offset + 1) = (this->data_length >> (8 * 1)) & 0xFF;
      *(outbuffer + offset + 2) = (this->data_length >> (8 * 2)) & 0xFF;
      *(outbuffer + offset + 3) = (this->data_length >> (8 * 3)) & 0xFF;
      offset += sizeof(this->data_length);
      for( uint32_t i = 0; i < data_length; i++) {
        *(outbuffer + offset + 0) = (this->data[i] >> (8 * 0)) & 0xFF;
        offset += sizeof(this->data[i]);
      }
      union {
        bool real;
        uint8_t base;
      } u_is_dense;
      u_is_dense.real = this->is_dense;
      *(outbuffer + offset + 0) = (u_is_dense.base >> (8 * 0)) & 0xFF;
      offset += sizeof(this->is_dense);
      return offset;
    }

    virtual int deserialize(unsigned char *inbuffer)
    {
      int offset = 0;
      offset += this->header.deserialize(inbuffer + offset);
      this->height =  ((uint32_t) (*(inbuffer + offset)));
      this->height |= ((uint32_t) (*(inbuffer + offset + 1))) << (8 * 1);
      this->height |= ((uint32_t) (*(inbuffer + offset + 2))) << (8 * 2);
      this->height |= ((uint32_t) (*(inbuffer + offset + 3))) << (8 * 3);
      offset += sizeof(this->height);
      this->width =  ((uint32_t) (*(inbuffer + offset)));
      this->width |= ((uint32_t) (*(inbuffer + offset + 1))) << (8 * 1);
      this->width |= ((uint32_t) (*(inbuffer + offset + 2))) << (8 * 2);
      this->width |= ((uint32_t) (*(inbuffer + offset + 3))) << (8 * 3);
      offset += sizeof(this->width);
      uint32_t fields_lengthT = ((uint32_t) (*(inbuffer + offset))); 
      fields_lengthT |= ((uint32_t) (*(inbuffer + offset + 1))) << (8 * 1); 
      fields_lengthT |= ((uint32_t) (*(inbuffer + offset + 2))) << (8 * 2); 
      fields_lengthT |= ((uint32_t) (*(inbuffer + offset + 3))) << (8 * 3); 
      offset += sizeof(this->fields_length);
      if(fields_lengthT > fields_length)
        this->fields = (sensor_msgs::PointField*)realloc(this->fields, fields_lengthT * sizeof(sensor_msgs::PointField));
      fields_length = fields_lengthT;
      for( uint32_t i = 0; i < fields_length; i++) {
        offset += this->st_fields.deserialize(inbuffer + offset);
        memcpy( &(this->fields[i]), &(this->st_fields), sizeof(sensor_msgs::PointField));
      }
      union {
        bool real;
        uint8_t base;
      } u_is_bigendian;
      u_is_bigendian.base = 0;
      u_is_bigendian.base |= ((uint8_t) (*(inbuffer + offset + 0))) << (8 * 0);
      this->is_bigendian = u_is_bigendian.real;
      offset += sizeof(this->is_bigendian);
      this->point_step =  ((uint32_t) (*(inbuffer + offset)));
      this->point_step |= ((uint32_t) (*(inbuffer + offset + 1))) << (8 * 1);
      this->point_step |= ((uint32_t) (*(inbuffer + offset + 2))) << (8 * 2);
      this->point_step |= ((uint32_t) (*(inbuffer + offset + 3))) << (8 * 3);
      offset += sizeof(this->point_step);
      this->row_step =  ((uint32_t) (*(inbuffer + offset)));
      this->row_step |= ((uint32_t) (*(inbuffer + offset + 1))) << (8 * 1);
      this->row_step |= ((uint32_t) (*(inbuffer + offset + 2))) << (8 * 2);
      this->row_step |= ((uint32_t) (*(inbuffer + offset + 3))) << (8 * 3);
      offset += sizeof(this->row_step);
      uint32_t data_lengthT = ((uint32_t) (*(inbuffer + offset))); 
      data_lengthT |= ((uint32_t) (*(inbuffer + offset + 1))) << (8 * 1); 
      data_lengthT |= ((uint32_t) (*(inbuffer + offset + 2))) << (8 * 2); 
      data_lengthT |= ((uint32_t) (*(inbuffer + offset + 3))) << (8 * 3); 
      offset += sizeof(this->data_length);
      if(data_lengthT > data_length)
        this->data = (uint8_t*)realloc(this->data, data_lengthT * sizeof(uint8_t));
      data_length = data_lengthT;
      for( uint32_t i = 0; i < data_length; i++) {
        this->st_data =  ((uint8_t) (*(inbuffer + offset)));
        offset += sizeof(this->st_data);
        memcpy( &(this->data[i]), &(this->st_data), sizeof(uint8_t));
      }
      union {
        bool real;
        uint8_t base;
      } u_is_dense;
      u_is_dense.base = 0;
      u_is_dense.base |= ((uint8_t) (*(inbuffer + offset + 0))) << (8 * 0);
      this->is_dense = u_is_dense.real;
      offset += sizeof(this->is_dense);
      return offset;
    }

    virtual int serializedLength() const
    {
      int length = 0;
      length += this->header.serializedLength();
      length += sizeof(this->height);
      length += sizeof(this->width);
      length += sizeof(this->fields_length);
      for( uint32_t i = 0; i < fields_length; i++) {
        length += this->fields[i].serializedLength();
      }
      length += sizeof(this->is_bigendian);
      length += sizeof(this->point_step);
      length += sizeof(this->row_step);
      length += sizeof(this->data_length);
      for( uint32_t i = 0; i < data_length; i++) {
        length += sizeof(this->data[i]);
      }
      length += sizeof(this->is_dense);
      return length;
    }

    virtual std::string echo()
    {
      std::string string_echo = "{";
      string_echo += "\"header\":";
      string_echo += this->header.echo();
      string_echo += ",";
      std::stringstream ss_height; ss_height << "\"height\":" << height <<",";
      string_echo += ss_height.str();
      std::stringstream ss_width; ss_width << "\"width\":" << width <<",";
      string_echo += ss_width.str();
      string_echo += "fields:[";
      for( uint32_t i = 0; i < fields_length; i++) {
        if( i == (fields_length - 1)) {
          string_echo += this->fields[i].echo();
          string_echo += "";
        } else {
          string_echo += this->fields[i].echo();
          string_echo += ",";
        }
      }
      string_echo += "],";
      std::stringstream ss_is_bigendian; ss_is_bigendian << "\"is_bigendian\":" << is_bigendian <<",";
      string_echo += ss_is_bigendian.str();
      std::stringstream ss_point_step; ss_point_step << "\"point_step\":" << point_step <<",";
      string_echo += ss_point_step.str();
      std::stringstream ss_row_step; ss_row_step << "\"row_step\":" << row_step <<",";
      string_echo += ss_row_step.str();
      string_echo += "data:[";
      for( uint32_t i = 0; i < data_length; i++) {
        if( i == (data_length - 1)) {
          std::stringstream ss_datai; ss_datai << (uint16_t)data[i] <<"";
          string_echo += ss_datai.str();
        } else {
          std::stringstream ss_datai; ss_datai << (uint16_t)data[i] <<",";
          string_echo += ss_datai.str();
        }
      }
      string_echo += "],";
      std::stringstream ss_is_dense; ss_is_dense << "\"is_dense\":" << is_dense <<"";
      string_echo += ss_is_dense.str();
      string_echo += "}";
      return string_echo;
    }

    virtual std::string getType(){ return "sensor_msgs/PointCloud2"; }
    virtual std::string getMD5(){ return "6aa926339b282463281af40546b3b3cf"; }

  };

}
#endif
