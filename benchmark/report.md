## Performance Report

**Version:** [v0.15.1](https://github.com/aws-observability/aws-otel-collector/releases/tag/v0.15.1)

**Commit ID:** [4ea583891bef3dde88c6790328acdbdc1a7a2874](https://github.com/aws-observability/aws-otel-collector/commit/4ea583891bef3dde88c6790328acdbdc1a7a2874)

**Collection Period:** 10 minutes

**Testing AMI:** soaking_linux


### Metric (TPS: 100)
| Receivers | Processors | Exporters | Test Case | Data Type | Instance Type | Avg CPU Usage (Percent) | Avg Memory Usage (Megabytes) | Max CPU Usage (Percent) | Max Memory Usage (Megabytes) |
|:---------:|:----------:|:---------:|:---------:|:---------:|:-------------:|:-----------------------:|:----------------------------:|:-----------------------:|:----------------------------:|
| otlp | batch | datadog | datadog_exporter_metric_mock | otlp | m5.2xlarge | 0.04 | 59.45 | 0.20 | 59.83 |
| otlp | batch | dynatrace | dynatrace_exporter_metric_mock | otlp | m5.2xlarge | 0.04 | 58.92 | 0.20 | 59.25 |
| otlp | batch | otlp | otlp_grpc_exporter_metric_mock | otlp | m5.2xlarge | 0.04 | 58.78 | 0.20 | 59.06 |
| otlp | batch | otlphttp | otlp_http_exporter_metric_mock | otlp | m5.2xlarge | 0.04 | 58.69 | 0.20 | 59.31 |
| otlp | batch | awsemf, logging | otlp_metric | otlp | m5.2xlarge | 0.04 | 59.59 | 0.20 | 59.85 |
| otlp | batch | signalfx | signalfx_exporter_metric_mock | otlp | m5.2xlarge | 0.04 | 59.34 | 0.20 | 59.61 |
| prometheus |  | awsprometheusremotewrite | prometheus_mock | prometheus | m5.2xlarge | 0.13 | 71.54 | 0.40 | 73.02 |
| prometheus |  | awsprometheusremotewrite | prometheus_static | prometheus | m5.2xlarge | 0.14 | 70.93 | 0.40 | 71.92 |
| statsd |  | awsemf, logging | statsd | statsd | m5.2xlarge | 0.75 | 67.39 | 1.00 | 67.94 |
| statsd |  | otlphttp | statsd_mock | statsd | m5.2xlarge | 0.02 | 58.38 | 0.20 | 58.48 |

### Metric (TPS: 1000)
| Receivers | Processors | Exporters | Test Case | Data Type | Instance Type | Avg CPU Usage (Percent) | Avg Memory Usage (Megabytes) | Max CPU Usage (Percent) | Max Memory Usage (Megabytes) |
|:---------:|:----------:|:---------:|:---------:|:---------:|:-------------:|:-----------------------:|:----------------------------:|:-----------------------:|:----------------------------:|
| otlp | batch | datadog | datadog_exporter_metric_mock | otlp | m5.2xlarge | 0.03 | 59.29 | 0.20 | 59.35 |
| otlp | batch | dynatrace | dynatrace_exporter_metric_mock | otlp | m5.2xlarge | 0.05 | 59.32 | 0.20 | 59.39 |
| otlp | batch | otlp | otlp_grpc_exporter_metric_mock | otlp | m5.2xlarge | 0.04 | 60.05 | 0.20 | 60.51 |
| otlp | batch | otlphttp | otlp_http_exporter_metric_mock | otlp | m5.2xlarge | 0.04 | 59.63 | 0.30 | 59.98 |
| otlp | batch | awsemf, logging | otlp_metric | otlp | m5.2xlarge | 0.04 | 59.58 | 0.20 | 59.85 |
| otlp | batch | signalfx | signalfx_exporter_metric_mock | otlp | m5.2xlarge | 0.04 | 60.05 | 0.20 | 60.17 |
| prometheus |  | awsprometheusremotewrite | prometheus_mock | prometheus | m5.2xlarge | 1.27 | 114.19 | 2.70 | 119.74 |
| prometheus |  | awsprometheusremotewrite | prometheus_static | prometheus | m5.2xlarge | 1.26 | 112.89 | 2.70 | 117.79 |
| statsd |  | awsemf, logging | statsd | statsd | m5.2xlarge | 5.72 | 68.39 | 6.30 | 68.96 |
| statsd |  | otlphttp | statsd_mock | statsd | m5.2xlarge | 0.02 | 58.88 | 0.10 | 58.92 |

### Metric (TPS: 5000)
| Receivers | Processors | Exporters | Test Case | Data Type | Instance Type | Avg CPU Usage (Percent) | Avg Memory Usage (Megabytes) | Max CPU Usage (Percent) | Max Memory Usage (Megabytes) |
|:---------:|:----------:|:---------:|:---------:|:---------:|:-------------:|:-----------------------:|:----------------------------:|:-----------------------:|:----------------------------:|
| otlp | batch | datadog | datadog_exporter_metric_mock | otlp | m5.2xlarge | 0.04 | 58.76 | 0.30 | 59.33 |
| otlp | batch | dynatrace | dynatrace_exporter_metric_mock | otlp | m5.2xlarge | 0.04 | 59.11 | 0.20 | 59.13 |
| otlp | batch | otlp | otlp_grpc_exporter_metric_mock | otlp | m5.2xlarge | 0.04 | 59.55 | 0.20 | 59.72 |
| otlp | batch | otlphttp | otlp_http_exporter_metric_mock | otlp | m5.2xlarge | 0.05 | 58.76 | 0.20 | 59.04 |
| otlp | batch | awsemf, logging | otlp_metric | otlp | m5.2xlarge | 0.04 | 59.69 | 0.20 | 60.03 |
| otlp | batch | signalfx | signalfx_exporter_metric_mock | otlp | m5.2xlarge | 0.04 | 59.77 | 0.20 | 60.01 |
| prometheus |  | awsprometheusremotewrite | prometheus_mock | prometheus | m5.2xlarge | 7.18 | 272.81 | 12.80 | 296.26 |
| prometheus |  | awsprometheusremotewrite | prometheus_static | prometheus | m5.2xlarge | 7.03 | 272.35 | 12.70 | 292.75 |
| statsd |  | awsemf, logging | statsd | statsd | m5.2xlarge | 25.81 | 67.40 | 27.01 | 67.70 |
| statsd |  | otlphttp | statsd_mock | statsd | m5.2xlarge | 0.02 | 58.94 | 0.20 | 59.48 |

### Trace (TPS: 100)
| Receivers | Processors | Exporters | Test Case | Data Type | Instance Type | Avg CPU Usage (Percent) | Avg Memory Usage (Megabytes) | Max CPU Usage (Percent) | Max Memory Usage (Megabytes) |
|:---------:|:----------:|:---------:|:---------:|:---------:|:-------------:|:-----------------------:|:----------------------------:|:-----------------------:|:----------------------------:|
| awsxray | batch | awsxray | xrayreceiver | xray | m5.2xlarge | 5.02 | 140.78 | 6.20 | 203.08 |
| jaeger | batch | logging, otlphttp | jaeger_mock | jaeger | m5.2xlarge | 2.51 | 74.97 | 3.00 | 77.13 |
| otlp | batch | datadog | datadog_exporter_trace_mock | otlp | m5.2xlarge | 5.39 | 72.73 | 6.10 | 74.31 |
| otlp | batch | logzio | logzio_exporter_trace_mock | otlp | m5.2xlarge | 3.17 | 88.12 | 3.50 | 91.14 |
| otlp | batch | otlp | otlp_grpc_exporter_trace_mock | otlp | m5.2xlarge | 3.35 | 134.85 | 4.80 | 185.66 |
| otlp | batch | otlphttp | otlp_http_exporter_trace_mock | otlp | m5.2xlarge | 3.48 | 69.41 | 3.80 | 70.57 |
| otlp | batch | awsxray | otlp_mock | otlp | m5.2xlarge | 4.07 | 70.18 | 4.50 | 70.97 |
| otlp | batch | awsxray, logging | otlp_trace | otlp | m5.2xlarge | 4.48 | 72.17 | 4.80 | 73.63 |
| otlp | batch | sapm | sapm_exporter_trace_mock | otlp | m5.2xlarge | 3.12 | 84.07 | 3.30 | 84.77 |
| zipkin | batch | logging, otlphttp | zipkin_mock | zipkin | m5.2xlarge | 5.82 | 76.87 | 6.90 | 81.52 |

### Trace (TPS: 1000)
| Receivers | Processors | Exporters | Test Case | Data Type | Instance Type | Avg CPU Usage (Percent) | Avg Memory Usage (Megabytes) | Max CPU Usage (Percent) | Max Memory Usage (Megabytes) |
|:---------:|:----------:|:---------:|:---------:|:---------:|:-------------:|:-----------------------:|:----------------------------:|:-----------------------:|:----------------------------:|
| awsxray | batch | awsxray | xrayreceiver | xray | m5.2xlarge | 33.72 | 652.13 | 45.60 | 1131.46 |
| jaeger | batch | logging, otlphttp | jaeger_mock | jaeger | m5.2xlarge | 16.31 | 149.10 | 22.80 | 177.68 |
| otlp | batch | datadog | datadog_exporter_trace_mock | otlp | m5.2xlarge | 32.22 | 73.18 | 33.39 | 74.52 |
| otlp | batch | logzio | logzio_exporter_trace_mock | otlp | m5.2xlarge | 28.50 | 100.35 | 29.40 | 106.28 |
| otlp | batch | otlp | otlp_grpc_exporter_trace_mock | otlp | m5.2xlarge | 28.24 | 718.58 | 40.30 | 1223.53 |
| otlp | batch | otlphttp | otlp_http_exporter_trace_mock | otlp | m5.2xlarge | 26.74 | 69.96 | 27.61 | 70.64 |
| otlp | batch | awsxray | otlp_mock | otlp | m5.2xlarge | 34.55 | 75.36 | 44.50 | 76.80 |
| otlp | batch | awsxray, logging | otlp_trace | otlp | m5.2xlarge | 36.69 | 77.36 | 46.78 | 78.71 |
| otlp | batch | sapm | sapm_exporter_trace_mock | otlp | m5.2xlarge | 26.01 | 85.25 | 26.71 | 85.87 |
| zipkin | batch | logging, otlphttp | zipkin_mock | zipkin | m5.2xlarge | 29.12 | 470.74 | 36.72 | 565.76 |

### Trace (TPS: 5000)
| Receivers | Processors | Exporters | Test Case | Data Type | Instance Type | Avg CPU Usage (Percent) | Avg Memory Usage (Megabytes) | Max CPU Usage (Percent) | Max Memory Usage (Megabytes) |
|:---------:|:----------:|:---------:|:---------:|:---------:|:-------------:|:-----------------------:|:----------------------------:|:-----------------------:|:----------------------------:|
| awsxray | batch | awsxray | xrayreceiver | xray | m5.2xlarge | 56.34 | 972.79 | 72.61 | 1663.81 |
| jaeger | batch | logging, otlphttp | jaeger_mock | jaeger | m5.2xlarge | 16.09 | 167.22 | 23.11 | 196.89 |
| otlp | batch | datadog | datadog_exporter_trace_mock | otlp | m5.2xlarge | 127.66 | 82.21 | 128.98 | 83.20 |
| otlp | batch | logzio | logzio_exporter_trace_mock | otlp | m5.2xlarge | 115.86 | 123.60 | 117.56 | 130.14 |
| otlp | batch | otlp | otlp_grpc_exporter_trace_mock | otlp | m5.2xlarge | 123.91 | 3097.87 | 182.53 | 5623.10 |
| otlp | batch | otlphttp | otlp_http_exporter_trace_mock | otlp | m5.2xlarge | 117.60 | 74.81 | 118.58 | 75.91 |
| otlp | batch | awsxray | otlp_mock | otlp | m5.2xlarge | 144.04 | 15917.19 | 485.56 | 27270.67 |
| otlp | batch | awsxray, logging | otlp_trace | otlp | m5.2xlarge | 169.14 | 11083.16 | 406.72 | 19515.44 |
| otlp | batch | sapm | sapm_exporter_trace_mock | otlp | m5.2xlarge | 114.68 | 91.25 | 115.56 | 94.43 |
| zipkin | batch | logging, otlphttp | zipkin_mock | zipkin | m5.2xlarge | 27.94 | 509.25 | 34.79 | 561.45 |
