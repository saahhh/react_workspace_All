container : 본문을 담을 컨테이너를 생성

mt-4 : mt는 margin top을 나타냄
    margin-top : 본문에 위 크기를 조정하는 것
    -4 : 상단 마진을 4단위로 설정하겠다는 것
    row : 컬럼을 나열하는데 사용 (한 줄을 나타냄, 컬럼은 12개를 나타냄)


col-md-6
    col : column 컬럼의 약자
    md : medium 중간 화면 크기
    6 : 6개의 컬럼을 차지
        보통 한 줄의 컬럼은 12개로 구성되어있음

mb-5 
    mb : margin buttom

bg-dark
    bg : background 배경색
    -dark : 검정

text-light : 글자색 흰색으로 설정

py-5
    py : padding-y
    y : 위 아래 여백을 조절하는 값
    x : 좌 우 여백을 조절하는 값
    부트스트랩에서 패딩을 상하좌우 주고싶다면 px-1 py-1해서 숫자 조절해주면
    BootStrap : 여백의 크기를 1~5까지 5단계


img-fluid : 이미지를 반응형으로 보여질 수 있게함
            부모 요소 크기에 맞게 알아서 조절
            더 작은 화면에서도 이미지가 깨지지 않고 적절히 표현될 수 있도록 유지해줌
            모바일과 태블릿 유용하게 사용하는 태그


rounded : 이미지의 모서리를 둥글게 만듬
rounded-circle : 이미지를 원형으로 만듬
img-thumnail : 이미지의 경계선과 그림자 효과를 추가해서 작은 썸네일 이미지를 만든다
float-left / float-right : 이미지를 왼쪽이나 오른쪽으로 정렬
mx-auto : 가로로 중앙 정렬 

card : 정보를 시각적으로 보여주는 데 사용
card-body : 카드의 내용을 감싸는 부분으로 일반적으로 텍스트, 이미지와 같은 내용을 담는 공간
card-text : 카드에서 일반적인 텍스트 내용을 나타냄
card-title : 카드의 제목


form-label : 폼 라벨은 사용자에게 입력하는 공간에 어떤 정보를 입력해줘야하는지 알려주는 텍스트 라벨용


form-control : 부트스트랩 스타일에 맞게 스타일링된 폼
                주로 입력필드에서 사용을 하는데 텍스트입력과 이메일입력, 패스워드입력 등에 사용


aria-describedby : 웹에서 label과 input에 설명요소를 지정할 때 사용
                    따로 small이나 p와같은 태그를 걸어서 id값으로 연결지어 사용한다
rows : 열의 크기값
btn : button의 약자
btn-primary : css규격을 사용하는 곳은 대부분 primary 라는 단어를 파란색 계열로 지정해서 사용하고 있음
                다른색상으로 변경하고 싶을 땐 btn-secondary/danger/info/warning/...등등