# Dockerfile for Go Modules Scanner
FROM golang:1.21-alpine

# Install dependencies
RUN apk add --no-cache \
    git \
    curl \
    bash \
    python3 \
    py3-pip

# Create working directory
WORKDIR /scan

# Copy scanner script
COPY agents/go_scanner.py /scan/
COPY agents/docker_base_scanner.py /scan/

# Install Python dependencies
RUN pip3 install requests

# Create output directory
RUN mkdir -p /scan/data

# Set up Go environment
ENV GOPATH=/go
ENV PATH=/go/bin:$PATH

RUN mkdir -p /go

# Default command
CMD ["python3", "go_scanner.py", "--count", "50", "--output", "/scan/data", "--temp", "/tmp/atheon-scanner"]
