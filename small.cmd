@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe" "%~dp0\bin\small" %*
) ELSE (
  @IF EXIST "%~dp0\nodejs\node.exe" (
    "%~dp0\nodejs\node.exe" "%~dp0\bin\small" %*
  ) ELSE (
    @SETLOCAL
    @SET PATHEXT=%PATHEXT:;.JS;=;%
    node "%~dp0\bin\small" %*
  )
)