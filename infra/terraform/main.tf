terraform {
  required_providers {
    kubernetes = {
      source  = "hashicorp/kubernetes"
      version = "~> 2.23.0"
    }
    helm = {
      source  = "hashicorp/helm"
      version = "~> 2.11.0"
    }
  }
}

provider "kubernetes" {
  config_path = "~/.kube/config"
}

provider "helm" {
  kubernetes {
    config_path = "~/.kube/config"
  }
}

resource "kubernetes_namespace" "test" {
  metadata {
    name = "hello"
  }
}

resource "helm_release" "hello-world" {
  name       = "hello-world"
  repository = "../helm"
  chart      = "hello-world"
  namespace  = kubernetes_namespace.test.metadata[0].name

  set {
    name  = "replicaCount"
    value = "3"
  }
}
