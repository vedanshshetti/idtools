#!/bin/sh

# Setup Pre-Push Hook which prevents you from pushing to cloud repository unless you updated the JSR Package Version.

HOOK_PATH=".git/hooks/pre-push"

cat > "$HOOK_PATH" << 'EOF'
#!/bin/sh

# Detect changed files in the push (staged or committed)
CHANGED_FILES=$(git diff --cached --name-only)

# Flags
PROD_CHANGED=false
INSIDERS_CHANGED=false
PROD_JSON_CHANGED=false
INSIDERS_JSON_CHANGED=false

# Check what changed
for file in $CHANGED_FILES; do
    case "$file" in
        prod/*)
            PROD_CHANGED=true
            ;;
        insiders/*)
            INSIDERS_CHANGED=true
            ;;
    esac

    case "$file" in
        prod/jsr.json)
            PROD_JSON_CHANGED=true
            ;;
        insiders/jsr.json)
            INSIDERS_JSON_CHANGED=true
            ;;
    esac
done

# Validation logic
if [ "$PROD_CHANGED" = true ] && [ "$PROD_JSON_CHANGED" = false ]; then
    echo "❌ Changes detected in prod/ but jsr.json was NOT updated."
    echo "   Update prod/jsr.json version before pushing."
    exit 1
fi

if [ "$INSIDERS_CHANGED" = true ] && [ "$INSIDERS_JSON_CHANGED" = false ]; then
    echo "❌ Changes detected in insiders/ but jsr.json was NOT updated."
    echo "   Update insiders/jsr.json version before pushing."
    exit 1
fi

echo "✔ Pre-push checks passed."
exit 0
EOF

chmod +x "$HOOK_PATH"

echo "✔ pre-push hook installed at $HOOK_PATH"
