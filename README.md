A PoC for using [helm](https://github.com/helm/helm) with [terraform](https://github.com/hashicorp/terraform).

## Installation

To experiment with AWS services without having to use real AWS services, we are going to use [Localstack](https://github.com/localstack/localstack) for local testing.

```bash
python3 -m pip install terraform-local
```

Now instead of using `terraform`, you can use `tflocal`:

```bash
tflocal init
tflocal apply
```

## Directory Structure

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
