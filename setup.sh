#!/bin/bash

# Function to check and install NVM if not exists
install_nvm() {
    if ! command -v nvm &> /dev/null; then
        echo "NVM not found. Installing NVM..."
        curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
        source ~/.bashrc
    fi
}

# Check and switch Node.js version
check_and_switch_node() {
    # Load NVM
    export NVM_DIR="$HOME/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
    [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"

    # Check current Node.js version
    CURRENT_NODE_VERSION=$(node -v 2>/dev/null)
    TARGET_VERSION="v18.17.1"

    if [[ "$CURRENT_NODE_VERSION" != "$TARGET_VERSION" ]]; then
        echo "Switching to Node.js $TARGET_VERSION..."
        nvm install $TARGET_VERSION
        nvm use $TARGET_VERSION
    fi
}

# Main setup script
main() {
    # Install NVM if not exists
    install_nvm

    # Switch to Node.js 18.17.1
    check_and_switch_node

    # Install Corepack globally
    npm install -g corepack

    # Enable Corepack
    corepack enable

    # Set Yarn version
    corepack prepare yarn@3.2.3 --activate

    # Confirm Yarn version
    yarn set version 3.2.3

    # Install dependencies
    yarn install

    # Start web application
    yarn web start
}

# Execute main script
main