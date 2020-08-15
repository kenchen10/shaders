#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

float circle(vec2 pos, float r) {
    return step(r, length(pos - vec2(0.5)));
}

float rect(vec2 pos, vec2 scale) {
    scale = vec2(0.5) - scale * .5;
    vec2 shape = vec2(step(scale.x, pos.x), step(scale.y, pos.y));
    shape *= vec2(step(scale.x, 1. - pos.x), step(scale.y, 1. - pos.y));
    return shape.x * shape.y;
}

void main() {
    vec2 pos = gl_FragCoord.xy / u_resolution;

    vec3 color = vec3(0.0);

    float c = rect(pos, vec2(.3, .3));
    color = vec3(c);

    gl_FragColor = vec4(color, 1.);
}