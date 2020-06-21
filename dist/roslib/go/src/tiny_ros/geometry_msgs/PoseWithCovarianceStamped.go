package geometry_msgs

import (
    "tiny_ros/std_msgs"
    "geometry_msgs/PoseWithCovariance"
)

type PoseWithCovarianceStamped struct {
    Go_header std_msgs.Header `json:"header"`
    Go_pose geometry_msgs.PoseWithCovariance `json:"pose"`
}

func NewPoseWithCovarianceStamped() (*PoseWithCovarianceStamped) {
    newPoseWithCovarianceStamped := new(PoseWithCovarianceStamped)
    newPoseWithCovarianceStamped.Go_header = std_msgs.NewHeader()
    newPoseWithCovarianceStamped.Go_pose = geometry_msgs.NewPoseWithCovariance()
    return newPoseWithCovarianceStamped
}

func (self *PoseWithCovarianceStamped) Go_serialize(buff []byte) (int) {
    offset := 0
    offset += self.Go_header.Go_serialize(buff[offset:])
    offset += self.Go_pose.Go_serialize(buff[offset:])
    return offset
}

func (self *PoseWithCovarianceStamped) Go_deserialize(buff []byte) (int) {
    offset := 0
    offset += self.Go_header.Go_deserialize(buff[offset:])
    offset += self.Go_pose.Go_deserialize(buff[offset:])
    return offset
}

func (self *PoseWithCovarianceStamped) Go_serializedLength() (int) {
    length := 0
    length += self.Go_header.Go_serializedLength()
    length += self.Go_pose.Go_serializedLength()
    return length
}

func (self *PoseWithCovarianceStamped) Go_echo() (string) { return "" }
func (self *PoseWithCovarianceStamped) Go_getType() (string) { return "geometry_msgs/PoseWithCovarianceStamped" }
func (self *PoseWithCovarianceStamped) Go_getMD5() (string) { return "14ff1431078f35103bf1b202333b4704" }
func (self *PoseWithCovarianceStamped) Go_getID() (uint32) { return 0 }
func (self *PoseWithCovarianceStamped) Go_setID(id uint32) { }

