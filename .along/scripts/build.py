#!/usr/bin/env python3
# Status: unconfigured
# Template for build in this repository
import os
import sys

def find_repo_root(start_dir=None):
    try:
        from alongkit.repo import find_repo_root as resolver
        return resolver(start_dir)
    except ImportError:
        cur = os.path.abspath(start_dir or os.path.dirname(__file__))
        while True:
            for marker in (".along", ".git", "AGENTS.md"):
                if os.path.exists(os.path.join(cur, marker)):
                    return cur
            parent = os.path.dirname(cur)
            if parent == cur:
                return os.path.abspath(start_dir or os.path.dirname(__file__))
            cur = parent

def main():
    repo_root = find_repo_root(os.path.dirname(__file__))
    print(f"[Notice] Please configure build command in .along/scripts/build.py")
    sys.exit(0)

if __name__ == "__main__":
    main()
