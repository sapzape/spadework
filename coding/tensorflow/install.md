[Tensorflow install]
> 참고 link : https://www.tensorflow.org/install/install_mac
## Info
본 문서는Python 3 +  Virtualenv 방식의 설치 가이드이니 참고하길 바란다.

## Install
아래의 순서로 따라간다.
본인은 근데, 그냥 python3도 설치했다.
(download : https://www.python.org/downloads/)

```
$sudo easy_install pip
$sudo pip install --upgrade virtualenv
$virtualenv --system-site-packages 디렉토리명 (참고)
```
(참고) 해당 디렉토리는 virtualenv 환경의 최상위 부분이 된다. 개인 취양으로 정하면 된다. (본인은 dev/라는 디렉토리 하위에 만들었음)

아래의 source 커멘드를 실행할 경우, '(디렉토리명)$' 과 같이 프롬프트가 변경된다.
```
$source 디렉토리명/bin/activate #bash, sh, ksh, zsh 사용시
$source 디렉토리명/bin/activate.csh #csh, tcsh 사용시
```

python3 의 텐서플로우를 설치한다.
```
(디렉토리명)$pip3 install --upgrade tensorflow 
```

## Start
위의 순서대로 설치할 경우 Virtualenv 환경이 활성화가 되어야 텐서플로우 프로그램 실행이 가능하다.
그래서 우선, Virtualenv 환경을 활성화 시킨다.
```
$source 디렉토리명/bin/activate
```

바뀐 상태에서 정상 동작 확인을 해보자.
```
(디렉토리명)$python3
>>> import tensorflow as tf
>>> hello = tf.constant('Hello, TensorFlow!')
>>> sess = tf.Session()
>>> print(sess.run(hello))
```

텐서플로우 사용을 끝내면, 기본 프롬프트로 변경하자.
```
(디렉토리명)$deactivate
```
