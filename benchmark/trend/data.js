window.BENCHMARK_DATA = {
  "lastUpdate": 1640121808149,
  "repoUrl": "https://github.com/jefchien/aws-otel-collector",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "name": "Ameen",
            "username": "aateeqi",
            "email": "ateeqi@amazon.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4ea583891bef3dde88c6790328acdbdc1a7a2874",
          "message": "temporarily remove containerinsight_eks_prometheus to unblock 0.15.1 release (#803)",
          "timestamp": "2021-12-13T06:56:19Z",
          "url": "https://github.com/jefchien/aws-otel-collector/commit/4ea583891bef3dde88c6790328acdbdc1a7a2874"
        },
        "date": 1640040149308,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "logzio_exporter_trace_mock",
            "value": "3.17",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "88.12",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "5.39",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "72.73",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_mock",
            "value": "4.07",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_mock",
            "value": "70.18",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_trace",
            "value": "4.48",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_trace",
            "value": "72.17",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "3.48",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "69.41",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "xrayreceiver",
            "value": "5.02",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "xrayreceiver",
            "value": "140.78",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "3.35",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "134.85",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "2.51",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "74.97",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "5.82",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "76.87",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "3.12",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "84.07",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "26.01",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "85.25",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "29.12",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "470.74",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "32.22",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "73.18",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "xrayreceiver",
            "value": "33.72",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "xrayreceiver",
            "value": "652.13",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "28.24",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "718.58",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_trace",
            "value": "36.69",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_trace",
            "value": "77.36",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "28.50",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "100.35",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_mock",
            "value": "34.55",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_mock",
            "value": "75.36",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "26.74",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "69.96",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "16.31",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "149.10",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "27.94",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "509.25",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_trace",
            "value": "169.14",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_trace",
            "value": "11083.16",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "115.86",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "123.60",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "16.09",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "167.22",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "xrayreceiver",
            "value": "56.34",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "xrayreceiver",
            "value": "972.79",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "123.91",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "3097.87",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "114.68",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "91.25",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "117.60",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "74.81",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_mock",
            "value": "144.04",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_mock",
            "value": "15917.19",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "127.66",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "82.21",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "7.18",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "272.81",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "statsd_mock",
            "value": "0.02",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "statsd_mock",
            "value": "58.94",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "58.76",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "statsd",
            "value": "25.81",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "statsd",
            "value": "67.40",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "59.11",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "prometheus_static",
            "value": "7.03",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "prometheus_static",
            "value": "272.35",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_metric",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_metric",
            "value": "59.69",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "58.76",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "59.55",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "59.77",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "prometheus_static",
            "value": "0.14",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "prometheus_static",
            "value": "70.93",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "0.13",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "71.54",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "58.92",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "59.45",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "58.78",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "59.34",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "statsd_mock",
            "value": "0.02",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "statsd_mock",
            "value": "58.38",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "58.69",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "statsd",
            "value": "0.75",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "statsd",
            "value": "67.39",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_metric",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_metric",
            "value": "59.59",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "60.05",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "statsd_mock",
            "value": "0.02",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "statsd_mock",
            "value": "58.88",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "60.05",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "59.32",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "0.03",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "59.29",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "prometheus_static",
            "value": "1.26",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "prometheus_static",
            "value": "112.89",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_metric",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_metric",
            "value": "59.58",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "statsd",
            "value": "5.72",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "statsd",
            "value": "68.39",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "59.63",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "1.27",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "114.19",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jeffrey Chien",
            "username": "jefchien",
            "email": "chienjef@amazon.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "cc8eb315135bdfed89782ee2f1368e5445df5ed3",
          "message": "Update v0.14.0 release notes. (#697)",
          "timestamp": "2021-10-29T18:19:28Z",
          "url": "https://github.com/jefchien/aws-otel-collector/commit/cc8eb315135bdfed89782ee2f1368e5445df5ed3"
        },
        "date": 1640121807240,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "logzio_exporter_trace_mock",
            "value": "3.17",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "88.12",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "5.39",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "72.73",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_mock",
            "value": "4.07",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_mock",
            "value": "70.18",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_trace",
            "value": "4.48",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_trace",
            "value": "72.17",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "3.48",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "69.41",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "xrayreceiver",
            "value": "5.02",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "xrayreceiver",
            "value": "140.78",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "3.35",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "134.85",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "2.51",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "74.97",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "5.82",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "76.87",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "3.12",
            "unit": "%",
            "extra": "Trace (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "84.07",
            "unit": "MB",
            "extra": "Trace (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "26.01",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "85.25",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "29.12",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "470.74",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "32.22",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "73.18",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "xrayreceiver",
            "value": "33.72",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "xrayreceiver",
            "value": "652.13",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "28.24",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "718.58",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_trace",
            "value": "36.69",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_trace",
            "value": "77.36",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "28.50",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "100.35",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_mock",
            "value": "34.55",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_mock",
            "value": "75.36",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "26.74",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "69.96",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "16.31",
            "unit": "%",
            "extra": "Trace (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "149.10",
            "unit": "MB",
            "extra": "Trace (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "27.94",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "zipkin_mock",
            "value": "509.25",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_trace",
            "value": "169.14",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_trace",
            "value": "11083.16",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "115.86",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "logzio_exporter_trace_mock",
            "value": "123.60",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "16.09",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "jaeger_mock",
            "value": "167.22",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "xrayreceiver",
            "value": "56.34",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "xrayreceiver",
            "value": "972.79",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "123.91",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_trace_mock",
            "value": "3097.87",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "114.68",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "sapm_exporter_trace_mock",
            "value": "91.25",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "117.60",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_trace_mock",
            "value": "74.81",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_mock",
            "value": "144.04",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_mock",
            "value": "15917.19",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "127.66",
            "unit": "%",
            "extra": "Trace (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_trace_mock",
            "value": "82.21",
            "unit": "MB",
            "extra": "Trace (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "7.18",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "272.81",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "statsd_mock",
            "value": "0.02",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "statsd_mock",
            "value": "58.94",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "58.76",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "statsd",
            "value": "25.81",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "statsd",
            "value": "67.40",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "59.11",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "prometheus_static",
            "value": "7.03",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "prometheus_static",
            "value": "272.35",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_metric",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_metric",
            "value": "59.69",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "58.76",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "59.55",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 5000) - Average CPU Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "59.77",
            "unit": "MB",
            "extra": "Metric (TPS: 5000) - Average Memory Usage"
          },
          {
            "name": "prometheus_static",
            "value": "0.14",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "prometheus_static",
            "value": "70.93",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "0.13",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "71.54",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "58.92",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "59.45",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "58.78",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "59.34",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "statsd_mock",
            "value": "0.02",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "statsd_mock",
            "value": "58.38",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "58.69",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "statsd",
            "value": "0.75",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "statsd",
            "value": "67.39",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "otlp_metric",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 100) - Average CPU Usage"
          },
          {
            "name": "otlp_metric",
            "value": "59.59",
            "unit": "MB",
            "extra": "Metric (TPS: 100) - Average Memory Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "signalfx_exporter_metric_mock",
            "value": "60.05",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "statsd_mock",
            "value": "0.02",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "statsd_mock",
            "value": "58.88",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_grpc_exporter_metric_mock",
            "value": "60.05",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "0.05",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "dynatrace_exporter_metric_mock",
            "value": "59.32",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "0.03",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "datadog_exporter_metric_mock",
            "value": "59.29",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "prometheus_static",
            "value": "1.26",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "prometheus_static",
            "value": "112.89",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_metric",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_metric",
            "value": "59.58",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "statsd",
            "value": "5.72",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "statsd",
            "value": "68.39",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "0.04",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "otlp_http_exporter_metric_mock",
            "value": "59.63",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "1.27",
            "unit": "%",
            "extra": "Metric (TPS: 1000) - Average CPU Usage"
          },
          {
            "name": "prometheus_mock",
            "value": "114.19",
            "unit": "MB",
            "extra": "Metric (TPS: 1000) - Average Memory Usage"
          }
        ]
      }
    ]
  }
}