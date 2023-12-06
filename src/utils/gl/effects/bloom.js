const fs = `
uniform sampler2D rawTexture;
uniform float exposure;
uniform float brightness;
uniform float brightnessMax;
uniform float gamma;
vec4 brightness_filterColor(vec4 color, vec2 texSize, vec2 texCoord) {
  if (dot(color.rgb, vec3(0.2126, 0.7152, 0.0722)) > brightness&&distance(color.rgb, vec3(1.0, 1.0, 1.0)) > brightnessMax) {
    return vec4(color.rgb, 1.0);
  } else {
    return vec4(0.0, 0.0, 0.0, 1.0);
  }
}
vec4 horizontal_blur(sampler2D texture, vec2 texSize, vec2 texCoord) {
  float weight[5];
  weight[0] = 0.227027;
  weight[1] = 0.1945946;
  weight[2] = 0.1216216;
  weight[3] = 0.054054; 
  weight[4] = 0.016216;
  vec2 texOffset = 1.0 / texSize;
  vec3 result = texture2D(texture, texCoord).rgb * weight[0];
  for (int i = 1; i < 5; ++i) {
    result += texture2D(texture, texCoord + vec2(texOffset.x * float(i), 0.0)).rgb * weight[i];
    result += texture2D(texture, texCoord - vec2(texOffset.x * float(i), 0.0)).rgb * weight[i];
  }
  return vec4(result, 1.0);
}
vec4 vertical_blur(sampler2D texture, vec2 texSize, vec2 texCoord) {
  float weight[5];
  weight[0] = 0.227027;
  weight[1] = 0.1945946;
  weight[2] = 0.1216216;
  weight[3] = 0.054054; 
  weight[4] = 0.016216;
  vec2 texOffset = 1.0 / texSize;
  vec3 result = texture2D(texture, texCoord).rgb * weight[0];
  for (int i = 1; i < 5; ++i) {
    result += texture2D(texture, texCoord + vec2(0.0, texOffset.y * float(i))).rgb * weight[i];
    result += texture2D(texture, texCoord - vec2(0.0, texOffset.y * float(i))).rgb * weight[i];
  }
  return vec4(result, 1.0);
}
vec4 combine_samplerColor(sampler2D texture, vec2 texSize, vec2 texCoord) {
    vec4 rawColor = texture2D(rawTexture, texCoord);
    vec3 bloomColor = texture2D(texture, texCoord).rgb;
    float alpha = rawColor.a;
    vec3 hdrColor = rawColor.rgb;      
    hdrColor += bloomColor;
    vec3 result = vec3(1.0) - exp(-hdrColor * exposure);
    result = pow(result, vec3(1.0 / gamma));
    return vec4(result, alpha);
}
`;

export const bloom = {
  name: "bloom",
  uniforms: {
    rawTexture: null,
    exposure: 1,
    brightnessMax: 0.9,
    brightness: 0.2,
    gamma: 2.2,
  },
  fs,
  passes: [
    { filter: "brightness_filterColor" },
    { sampler: "horizontal_blur" },
    { sampler: "vertical_blur" },
    { sampler: "horizontal_blur" },
    { sampler: "vertical_blur" },
    { sampler: "horizontal_blur" },
    { sampler: "vertical_blur" },
    { sampler: "horizontal_blur" },
    { sampler: "vertical_blur" },
    { sampler: "horizontal_blur" },
    { sampler: "vertical_blur" },
    { sampler: "combine_samplerColor" },
  ],
};
