variable "aws_region" {
  type    = string
  default = "ap-southeast-1"
}

variable "project_name" {
  type    = string
  default = "smart-farm"
}

variable "db_password" {
  type      = string
  sensitive = true
}
