# Dockerfile for RubyGems Scanner
FROM ruby:3.2-alpine

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
COPY agents/rubygems_scanner.py /scan/
COPY agents/docker_base_scanner.py /scan/

# Install Python dependencies
RUN pip3 install requests

# Create output directory
RUN mkdir -p /scan/data

# Default command
CMD ["python3", "rubygems_scanner.py", "--count", "100", "--output", "/scan/data", "--temp", "/tmp/atheon-scanner"]
