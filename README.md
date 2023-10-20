A PoC for using [helm](https://github.com/helm/helm) with [terraform](https://github.com/hashicorp/terraform).

```
.
├── LICENSE
├── README.md
├── hello-world
│   ├── Dockerfile
│   ├── README.md
│   ├── docker-compose.yaml
│   ├── package-lock.json
│   ├── package.json
│   ├── server.cert
│   ├── server.js
│   └── server.key
└── infra
    ├── helm
    │   └── hello-world
    └── terraform
        ├── main.tf
        ├── terraform.tfstate
        └── terraform.tfstate.backup

6 directories, 13 files
```
