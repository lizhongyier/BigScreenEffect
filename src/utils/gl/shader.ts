const vertexShader = `varying vec2 vUv;
varying vec3 v_position;
void main() {
    vUv = uv;
    v_position = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`
const fragmentShader = `varying vec2 vUv;
varying vec3 v_position;

uniform float innerCircleWidth;
uniform float circleWidth;
uniform float opacity;
uniform vec3 center;

uniform vec3 color;
uniform sampler2D buliding;

void main() {
float dis = length(v_position - center);
if(dis < (innerCircleWidth + circleWidth) && dis > innerCircleWidth) {
   float r = (dis - innerCircleWidth) / circleWidth;
   vec4 tex = texture2D( buliding, vUv);
   gl_FragColor = mix(tex, vec4(color, opacity), r);
}else {
  gl_FragColor = texture2D( buliding, vUv);
}  
}`

const ground_vertexShader = `varying vec2 vUv;
varying vec3 v_position;
void main() {
    vUv = uv;
    v_position = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`
const ground_fragmentShader = `varying vec2 vUv;
varying vec3 v_position;

uniform float innerCircleWidth;
uniform float circleWidth;
uniform float opacity;
uniform vec3 center;

uniform vec3 color;
uniform vec3 diff;

void main() {
    float dis = length(v_position - center);
    if(dis < (innerCircleWidth + circleWidth) && dis > innerCircleWidth) {
        float r = (dis - innerCircleWidth) / circleWidth;
       
        gl_FragColor = mix(vec4(diff, 0.1), vec4(color, opacity), r);
    } else {
        gl_FragColor = vec4(diff, 0.1);
    }

}`

export { vertexShader, fragmentShader, ground_vertexShader, ground_fragmentShader }

