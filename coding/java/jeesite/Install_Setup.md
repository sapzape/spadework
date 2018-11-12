# Jeesite install and setup

JeeSite라는 Spring기반 오픈소스 프로젝트를 분석하기 위한 셋팅 작업 기록이다. 해당 문서에서는 하위 내용을 간략하게 로그 형식으로 기록하였다. (추후 블로그 작업 진행시 상세하게 다룰 예정)
  - 설치
  - 환경 셋팅
  - 이슈 사항
  - 마치며

# Installation

* requirement
  1. Java 1.6
  2. Tomcat 7
  3. MySQL 5.x

* 소스 체크아웃
  ```sh
  ❯ git clone https://github.com/thinkgem/jeesite.git
  ```

* Java 버전 체크
  ```sh
  ❯ java -version
  java version "1.8.0_144"
  Java(TM) SE Runtime Environment (build 1.8.0_144-b01)
  Java HotSpot(TM) 64-Bit Server VM (build 25.144-b01, mixed mode)
  ```
  프로젝트에서는 1.6을 사용해야 하기 때문에 멀티로 사용할 수 있는 'jenv' 를 통해 설치 진행
  ``` sh
  ❯ brew cask install caskroom/versions/java6
  ❯ /usr/libexec/java_home -v 1.6
  /Library/Java/JavaVirtualMachines/1.6.0.jdk/Contents/Home
  ❯ jenv add /Library/Java/JavaVirtualMachines/1.6.0.jdk/Contents/Home
  oracle64-1.6.0.65 added
  1.6.0.65 added
  1.6 added
  ```
  다른 곳은 1.8을 사용하고, 이 프로젝트에서만 1.6을 쓰기로 함
  ```sh
  ❯ jenv local 1.6.0.65
  ❯ jenv versions
  system
  1.6
  * 1.6.0.65 (set by 어쩌구저쩌구/java-workspace/jeesite/.java-version)
  1.8
  1.8.0.144
  oracle64-1.6.0.65
  oracle64-1.8.0.144
  ```
* Maven 설치
  ```sh
  ❯ mvn -version
  zsh: command not found: mvn
  ```
  ```sh
  ❯ brew install maven
  ==> Downloading https://www.apache.org/dyn/closer.cgi?path=maven/maven-3/3.5.4/binaries/apache-maven-3.5.4-bin.t
  ==> Downloading from http://mirror.apache-kr.org/maven/maven-3/3.5.4/binaries/apache-maven-3.5.4-bin.tar.gz
  ######################################################################## 100.0%
  🍺  /usr/local/Cellar/maven/3.5.4: 104 files, 10.2MB, built in 8 seconds
  ```
  ```sh
  ❯ mvn -version
  Apache Maven 3.5.4 (1edded0938998edf8bf061f1ceb3cfdeccf443fe; 2018-06-18T03:33:14+09:00)
  Maven home: /usr/local/Cellar/maven/3.5.4/libexec
  Java version: 1.8.0_144, vendor: Oracle Corporation, runtime:   /Library/Java/JavaVirtualMachines/jdk1.8.0_144.jdk/Contents/Home/jre
  Default locale: en_US, platform encoding: UTF-8
  OS name: "mac os x", version: "10.14", arch: "x86_64", family: "mac"
  ```
  ```sh
  ❯ export M2_HOME=/usr/local/Cellar/maven/3.5.4/libexec
  ❯ export M2=$M2_HOME/bin
  ❯ export PATH=$PATH:$M2_HOME/bin
  ```
  
* Tomcat 설치
  ```sh
  ❯ sudo mv ~/Downloads/apache-tomcat-7.0.91 /usr/local
  Password:
  ❯ sudo ln -s /usr/local/apache-tomcat-7.0.91 /Library/Tomcat
  ❯ sudo chown sapzape /Library/Tomcat
  ❯ sudo chmod +x /Library/Tomcat/bin/*.sh
  ❯ /Library/Tomcat/bin/startup.sh
  Using CATALINA_BASE:   /Library/Tomcat
  Using CATALINA_HOME:   /Library/Tomcat
  Using CATALINA_TMPDIR: /Library/Tomcat/temp
  Using JRE_HOME:        /Library/Java/JavaVirtualMachines/jdk1.8.0_144.jdk/Contents/Home
  Using CLASSPATH:       /Library/Tomcat/bin/bootstrap.jar:/Library/Tomcat/bin/tomcat-juli.jar
  Tomcat started.

  ❯ /Library/Tomcat/bin/shutdown.sh
  Using CATALINA_BASE:   /Library/Tomcat
  Using CATALINA_HOME:   /Library/Tomcat
  Using CATALINA_TMPDIR: /Library/Tomcat/temp
  Using JRE_HOME:        /Library/Java/JavaVirtualMachines/jdk1.8.0_144.jdk/Contents/Home
  Using CLASSPATH:       /Library/Tomcat/bin/bootstrap.jar:/Library/Tomcat/bin/tomcat-juli.jar
  ``
* MySQL 설치
  ```sh
  ❯ brew install mysql@5.7
  echo 'export PATH="/usr/local/opt/mysql@5.7/bin:$PATH"' >> ~/.zshrc
  ```
  brew를 사용해서 최신 버전과 5.7버전 둘 다 사용해보려 했지만, 잘 안됬다. 그 두개 같이 쓰려고 엄청 삽질 -_-; 
  (아래 코드는 삽질 흔적 ... 결국 안됬음)
  ```sh
  ❯ brew install mysql
  ❯ brew install mysql@5.7
  ❯ brew unlink mysql
  Unlinking /usr/local/Cellar/mysql/8.0.12... 79 symlinks removed
  ❯ brew link --force mysql@5.7
  Linking /usr/local/Cellar/mysql@5.7/5.7.24... 87 symlinks created
  ❯ echo 'export PATH="/usr/local/opt/mysql@5.7/bin:$PATH"' >> ~/.zshrc
  ```

# Setting
중국어로 작성되어 있는 Manual을 봤을 때 '.bat'파일을 실행해보라고 하지만, Mac에서 가능한가 ... 그냥 파일 까서 수행 하는 커멘드를 수행시켰다.

음... 우선 안됬다.
```sh
❯ mvn -f ../pom.xml antrun:run -Pinit-db
```

pom.xml 경로를 몰라서 그런다길래, 경로를 지정해줬다.
```sh
❯ mvn -f ../pom.xml antrun:run -Pinit-db
```

SQL 파일은 그냥 MySQL Workbench 설치해서 쿼리 실행했다.

# Reference Link

셋팅을 하며 참고한 링크 :

* [Maven 설치]
* [Tomcat & Eclipse 연동]
* [Jenv 설치]
 
# Issue

이슈 발생 내용과 리서칭 한 링크 :

* [Eclipse Preference에 Server가 없었다...]
: Eclipse IDE for Java Developers 를 멋모르고 설치했었다. Eclipse IDE for Java EE Developers를 설치해야한다.
* [MySQL 재설치]
: 최신 버전 (8.x와 5.x 버전을 둘 다 설치하려 했지만 여기서 시간 제일 많이 날림...)

# End
1. 막상 정리해보니 양이 별로 안되어 화가난다. (역시 환경 셋팅은 ...)
2. 학부생 시절에 써보고 회사에서 가끔씩 사용하던 Java ... 낯설다.
3. 의존성... 없는 버전 써놓고, 지원하지 않는 버전 써놓고... 은근 삽질...
4. Python 의 virtualenv 처럼 여러 버전을 가져다가 써보려 했는데, MySQL 녀석 덕분에 하기 싫어졌다.
5. 정리가 필요한 내용들
  - Maven (Composer를 쓰다보니까 대충 알겠지만, 대충이란 없다!)

익숙치 않은 환경에서 셋팅을 하다보니, (결과적으로)간단하였지만 역시나 삽질..
앞으로 하나씩 뜯어보며(?) 얻을 것들을 캐내어 보자.

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [Maven 설치]: <https://m.blog.naver.com/PostView.nhn?blogId=sthwin&logNo=221165219790&targetKeyword=&targetRecommendationCode=1&proxyReferer=https%3A%2F%2Fwww.google.co.kr%2F>
   [Tomcat & Eclipse 연동]: <http://codedragon.tistory.com/3848>
   [Eclipse Preference에 Server가 없었다...]: <https://blog.naver.com/whdals0/110171736941>
   [Jenv 설치]: <http://www.jenv.be/>
   [MySQL 재설치]: <https://github.com/appkr/l5code/issues/4>

