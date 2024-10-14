SHELL := /bin/bash

cluster_name = "cnayp-cluster"
app_ns = "cnayp-apps"

.PHONY: kind-init
kind-init:
	kind create cluster --name $(cluster_name) --config ./kind-local/clusterconfig.yaml
	kubectl create ns $(app_ns)

kind-apps:
	kubectl apply -f ./apps/servers --recursive -n $(app_ns)

kind-info:
	kubectl cluster-info --context kind-$(cluster_name)

kind-delete:
	kind delete cluster --name $(cluster_name)

kind-cfg:
	kind get kubeconfig --name $(cluster_name)
