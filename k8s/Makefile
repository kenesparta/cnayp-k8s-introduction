SHELL := /bin/bash

cluster_name = "cnayp-cluster"
app_ns = "cnayp-apps"
dbs_ns = "cnayp-dbs"

.PHONY: kind-init
kind-init:
	kind create cluster --name $(cluster_name) --config ./kind-local/clusterconfig.yaml
	kubectl create ns $(app_ns)
	kubectl create ns $(dbs_ns)

kind-apps:
	kubectl apply -f ./apps/servers --recursive -n $(app_ns)
	kubectl apply -f ./apps/db --recursive -n $(dbs_ns)

kind-info:
	kubectl cluster-info --context kind-$(cluster_name)

kind-delete:
	kind delete cluster --name $(cluster_name)
