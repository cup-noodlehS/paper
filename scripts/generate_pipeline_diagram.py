#!/usr/bin/env python3
"""
Generate pipeline architecture diagram for the ATVD thesis.
"""

import matplotlib.pyplot as plt
import matplotlib.patches as mpatches
from matplotlib.patches import FancyBboxPatch, FancyArrowPatch
import numpy as np

# Set up figure
fig, ax = plt.subplots(1, 1, figsize=(12, 8))
ax.set_xlim(0, 12)
ax.set_ylim(0, 8)
ax.set_aspect('equal')
ax.axis('off')

# Colors
colors = {
    'input': '#E8F4FD',      # Light blue
    'detection': '#FFF3E0',   # Light orange
    'tracking': '#E8F5E9',    # Light green
    'calibration': '#F3E5F5', # Light purple
    'inference': '#FFEBEE',   # Light red
    'output': '#E0F2F1',      # Light teal
    'border': '#424242',      # Dark gray
    'arrow': '#616161',       # Medium gray
    'fuzzy': '#C8E6C9',       # Slightly darker green for fuzzy
}

def draw_box(ax, x, y, width, height, text, color, fontsize=9, bold=False):
    """Draw a rounded rectangle with centered text."""
    box = FancyBboxPatch(
        (x - width/2, y - height/2), width, height,
        boxstyle="round,pad=0.02,rounding_size=0.15",
        facecolor=color,
        edgecolor=colors['border'],
        linewidth=1.5
    )
    ax.add_patch(box)

    weight = 'bold' if bold else 'normal'
    ax.text(x, y, text, ha='center', va='center', fontsize=fontsize,
            fontweight=weight, wrap=True)

def draw_arrow(ax, start, end, connectionstyle="arc3,rad=0"):
    """Draw an arrow between two points."""
    arrow = FancyArrowPatch(
        start, end,
        arrowstyle='-|>',
        mutation_scale=15,
        color=colors['arrow'],
        linewidth=1.5,
        connectionstyle=connectionstyle
    )
    ax.add_patch(arrow)

# Title
ax.text(6, 7.5, 'ATVD Pipeline Architecture', ha='center', va='center',
        fontsize=14, fontweight='bold')

# Layer 1: Input
draw_box(ax, 2, 6, 3, 0.8, 'CCTV Video Input', colors['input'], fontsize=10, bold=True)

# Layer 2: Detection
draw_box(ax, 2, 4.8, 3, 0.8, 'Vehicle Detection\n(YOLO)', colors['detection'], fontsize=9)

# Layer 3: Tracking (main box + fuzzy sub-box)
draw_box(ax, 2, 3.2, 3, 1.2, '', colors['tracking'])
ax.text(2, 3.5, 'Multi-Object Tracking', ha='center', va='center', fontsize=9, fontweight='bold')
draw_box(ax, 2, 2.9, 2.4, 0.5, 'Fuzzy Association &\nClass Stabilization', colors['fuzzy'], fontsize=7)

# Calibration (side box)
draw_box(ax, 6, 4, 2.5, 1.4, 'Manual Geometric\nCalibration\n\n(Homography + ROIs)', colors['calibration'], fontsize=8)

# Layer 4: Speed Estimation
draw_box(ax, 2, 1.6, 3, 0.8, 'Speed Estimation\n(Metric Projection)', colors['calibration'], fontsize=9)

# Layer 5: Violation Inference
draw_box(ax, 6, 1.6, 3, 1.2, '', colors['inference'])
ax.text(6, 1.85, 'Rule-Based Violation\nInference', ha='center', va='center', fontsize=9, fontweight='bold')
ax.text(6, 1.25, '(Lane, Stop, Direction,\nU-turn, Overspeed)', ha='center', va='center', fontsize=7)

# Layer 6: Output
draw_box(ax, 9.5, 1.6, 2.2, 1.0, 'Evidence Bundles\n\n(Frames, Tracks,\nTimestamps)', colors['output'], fontsize=8)

# Arrows - Main flow
draw_arrow(ax, (2, 5.6), (2, 5.2))  # Input -> Detection
draw_arrow(ax, (2, 4.4), (2, 3.8))  # Detection -> Tracking
draw_arrow(ax, (2, 2.6), (2, 2.0))  # Tracking -> Speed

# Arrows - Calibration connections
draw_arrow(ax, (4.75, 4), (3.5, 3.4), connectionstyle="arc3,rad=-0.2")  # Calib -> Tracking
draw_arrow(ax, (4.75, 3.6), (3.5, 1.6), connectionstyle="arc3,rad=0.3")  # Calib -> Speed

# Arrows - To violation inference
draw_arrow(ax, (3.5, 3.2), (4.5, 1.9), connectionstyle="arc3,rad=-0.2")  # Tracking -> Violation
draw_arrow(ax, (3.5, 1.6), (4.5, 1.6))  # Speed -> Violation

# Arrows - To output
draw_arrow(ax, (7.5, 1.6), (8.4, 1.6))  # Violation -> Output

# Add layer labels on the left
ax.text(0.3, 6, 'Input', ha='left', va='center', fontsize=8, style='italic', color='#757575')
ax.text(0.3, 4.8, 'Perception', ha='left', va='center', fontsize=8, style='italic', color='#757575')
ax.text(0.3, 3.2, 'Temporal\nContinuity', ha='left', va='center', fontsize=8, style='italic', color='#757575')
ax.text(0.3, 1.6, 'Inference', ha='left', va='center', fontsize=8, style='italic', color='#757575')

# Add a legend for the fuzzy component
legend_box = FancyBboxPatch(
    (9, 5.8), 2.5, 1.2,
    boxstyle="round,pad=0.02,rounding_size=0.1",
    facecolor='white',
    edgecolor='#BDBDBD',
    linewidth=1
)
ax.add_patch(legend_box)
ax.text(10.25, 6.6, 'Legend', ha='center', va='center', fontsize=8, fontweight='bold')

# Legend items
small_box1 = FancyBboxPatch((9.2, 6.1), 0.3, 0.25, boxstyle="round,pad=0.01",
                             facecolor=colors['fuzzy'], edgecolor=colors['border'], linewidth=0.5)
ax.add_patch(small_box1)
ax.text(9.65, 6.22, 'Fuzzy Logic\nEnhancement', ha='left', va='center', fontsize=6)

small_box2 = FancyBboxPatch((9.2, 5.7), 0.3, 0.25, boxstyle="round,pad=0.01",
                             facecolor=colors['calibration'], edgecolor=colors['border'], linewidth=0.5)
ax.add_patch(small_box2)
ax.text(9.65, 5.82, 'Calibration-\nDependent', ha='left', va='center', fontsize=6)

plt.tight_layout()
plt.savefig('images/pipeline_architecture.pdf', format='pdf', dpi=300, bbox_inches='tight')
plt.savefig('images/pipeline_architecture.png', format='png', dpi=300, bbox_inches='tight')
print("Pipeline diagram saved to images/pipeline_architecture.pdf and .png")
