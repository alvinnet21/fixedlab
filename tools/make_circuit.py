"""Generate assets/img/circuit.svg — a seamless, random-looking circuit-trace background tile.
Run: python3 tools/make_circuit.py [seed]"""
import random, sys, math

SIZE = 1400
SEED = int(sys.argv[1]) if len(sys.argv) > 1 else 22
random.seed(SEED)
LIME = "#9AF20D"
DIRS = [(0, 1), (0, -1), (1, 0), (-1, 0)]

def snap(v, g=10):
    return round(v / g) * g

def trace():
    x, y = snap(random.uniform(0, SIZE)), snap(random.uniform(0, SIZE))
    dx, dy = random.choice(DIRS)
    pts = [(x, y)]
    for _ in range(random.choice([1, 2, 2, 3, 3, 4])):
        L = snap(random.uniform(40, 300))
        x, y = x + dx * L, y + dy * L
        pts.append((x, y))
        # 45° bend
        side = random.choice([-1, 1])
        bx, by = (dx - dy * side), (dy + dx * side)
        B = snap(random.uniform(14, 70))
        x, y = x + bx * B / 1, y + by * B / 1
        pts.append((x, y))
        if random.random() < .5:  # turn 90° after the bend
            dx, dy = -dy * side, dx * side
    if random.random() < .35:
        pts.pop()
    return pts

def render(pts, ox, oy, op, w, end):
    d = "M" + " L".join(f"{px+ox:.0f} {py+oy:.0f}" for px, py in pts)
    sx, sy = pts[0]; ex, ey = pts[-1]
    out = [f'<path d="{d}" stroke-width="{w}" opacity="{op}"/>']
    r = 4 + w
    if end in ("dot", "both"):
        out.append(f'<circle cx="{ex+ox:.0f}" cy="{ey+oy:.0f}" r="{r:.1f}" fill="{LIME}" stroke="none" opacity="{op}"/>')
    if end in ("ring", "both"):
        out.append(f'<circle cx="{sx+ox:.0f}" cy="{sy+oy:.0f}" r="{r:.1f}" fill="#080A09" stroke-width="{w}" opacity="{op}"/>')
    return out

parts = []
for _ in range(46):
    pts = trace()
    op = round(random.uniform(.05, .15), 3)
    w = random.choice([1.5, 2, 2, 2.5])
    end = random.choice(["dot", "dot", "ring", "both", "none"])
    for ox in (-SIZE, 0, SIZE):
        for oy in (-SIZE, 0, SIZE):
            parts += render(pts, ox, oy, op, w, end)

svg = (f'<svg xmlns="http://www.w3.org/2000/svg" width="{SIZE}" height="{SIZE}" viewBox="0 0 {SIZE} {SIZE}" '
       f'fill="none" stroke="{LIME}" stroke-linecap="round" stroke-linejoin="round">\n'
       + "\n".join(parts) + "\n</svg>\n")
open("assets/img/circuit.svg", "w").write(svg)
print("wrote assets/img/circuit.svg", len(svg) // 1024, "KB")
