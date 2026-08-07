data "aws_availability_zones" "available" {}

resource "aws_vpc" "main" {
  cidr_block           = "10.40.0.0/16"
  enable_dns_hostnames = true
  tags = { Name = var.project_name }
}

resource "aws_subnet" "public" {
  count                   = 2
  vpc_id                  = aws_vpc.main.id
  cidr_block              = cidrsubnet(aws_vpc.main.cidr_block, 8, count.index)
  availability_zone       = data.aws_availability_zones.available.names[count.index]
  map_public_ip_on_launch = true
}

resource "aws_ecr_repository" "services" {
  for_each = toset(["web", "api", "ai-service", "worker", "scheduler", "iot-gateway"])
  name     = "${var.project_name}/${each.key}"
  image_scanning_configuration { scan_on_push = true }
}

output "ecr_repositories" {
  value = { for k, v in aws_ecr_repository.services : k => v.repository_url }
}
